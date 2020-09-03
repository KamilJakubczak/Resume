from django.shortcuts import render
from .serializers import PositionSerializer, EducationSerializer, ProjectSerializer
from .serializers import CourseSerializer, SkillSerializer, InfoSerializer
from .models import Position, Education, Course, Skill, Info, Project
from rest_framework import viewsets

# VIEWSETS


class PositionViewSet(viewsets.ModelViewSet):

    queryset = Position.objects.filter(disabled=False) \
                               .order_by('-order')
    serializer_class = PositionSerializer


class EducationViewSet(viewsets.ModelViewSet):

    queryset = Education.objects.filter(disabled=False) \
                                .order_by('-order')
    serializer_class = EducationSerializer


class CourseViewSet(viewsets.ModelViewSet):

    queryset = Course.objects.filter(disabled=False) \
        .order_by('-completion_date')

    serializer_class = CourseSerializer


class SkillViewSet(viewsets.ModelViewSet):

    queryset = Skill.objects.filter(disabled=False) \
        .order_by('order')

    serializer_class = SkillSerializer


class InfoViewSet(viewsets.ModelViewSet):

    queryset = Info.objects.filter(disabled=False) \
        .order_by('order')
    serializer_class = InfoSerializer


class ProjectViewSet(viewsets.ModelViewSet):

    queryset = Project.objects.filter(disabled=False) \
        .order_by('order')
    serializer_class = ProjectSerializer
