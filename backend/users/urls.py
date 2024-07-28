from django.urls import path
from . import views
from .views import UserRegistrationView, LoginView, UserView, LogoutView, Draw

urlpatterns = [
    path("register/", UserRegistrationView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),
    path("user/", UserView.as_view(), name="user"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("draw/", Draw.as_view(), name="draw"),

]
