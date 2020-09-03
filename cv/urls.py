from django.urls import path, include
from rest_framework import routers
from .views import PositionViewSet, EducationViewSet, CourseViewSet
from .views import SkillViewSet, InfoViewSet, ProjectViewSet

router = routers.DefaultRouter()
router.register('positions', PositionViewSet)
router.register('educations', EducationViewSet)
router.register('courses', CourseViewSet)
router.register('skills', SkillViewSet)
router.register('info', InfoViewSet)
router.register('projects', ProjectViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
