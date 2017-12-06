# -*- coding: utf-8 -*-
# author: itimor

from rest_framework import viewsets
from perms.models import UserMenuPerms
from perms.serializers import UserMenuPermsSerializer
from rest_framework.response import Response
from menus.models import Firstmenu, Secondmenu, MenuMeta
from menus.serializers import FirstmenuSerializer, SecondmenuSerializer, MenuMetaSerializer
from django.forms.models import model_to_dict


class UserMenuPermsViewSet(viewsets.ModelViewSet):
    queryset = UserMenuPerms.objects.all()
    serializer_class = UserMenuPermsSerializer

    def retrieve(self, request, *args, **kwargs):
        queryset = UserMenuPerms.objects.get(user=request.user)
        serializer = UserMenuPermsSerializer(queryset, context={'request': request}).data
        routers = []
        firstmenus = []
        for onename in serializer['firstmenus']:
            firstmenu = Firstmenu.objects.get(name=onename)
            firstmenuserializer = FirstmenuSerializer(firstmenu, context={'request': request}).data
            onenames = model_to_dict(firstmenu)
            onenames["meta"] = {}
            for meta_id in firstmenuserializer['meta']:
                menumeta = MenuMeta.objects.get(id=meta_id)
                menumetaserializer = MenuMetaSerializer(menumeta, context={'request': request}).data
                onenames["meta"][menumetaserializer["name"]] = menumetaserializer["action"]
            onenames["children"] = []

            for twoname in serializer['seaondmenus']:
                secondmenu = Secondmenu.objects.get(name=twoname)
                secondmenuserializer = SecondmenuSerializer(secondmenu, context={'request': request}).data
                twonames = model_to_dict(secondmenu)
                twonames["meta"] = {}
                for meta_id in secondmenuserializer['meta']:
                    menumeta = MenuMeta.objects.get(id=meta_id)
                    menumetaserializer = MenuMetaSerializer(menumeta, context={'request': request}).data
                    twonames["meta"][menumetaserializer["name"]] = menumetaserializer["action"]
                if firstmenuserializer['name'] == secondmenuserializer['parent']:
                    onenames["children"].append(twonames)

            firstmenus.append(onenames)
        routers.append(firstmenus)

        return Response(routers)