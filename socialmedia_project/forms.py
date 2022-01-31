from attr import fields
from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User


class CreateUserForm(UserCreationForm):
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput(attrs={'placeholder':'Enter Password'}))
    password2 = forms.CharField(label='Confirm Password', widget=forms.PasswordInput(attrs={'placeholder':'Enter Confirm Password'}))
    email = forms.CharField(required=True, label='Email', widget=forms.EmailInput(attrs={'placeholder':'Enter Email'}))
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
        widgets = {'username':forms.TextInput(attrs={'placeholder':'Enter Username'})}

class LoginForm(AuthenticationForm):
    username = forms.CharField(label="Username", widget = forms.TextInput(attrs={'placeholder':'Username'}))
    password = forms.CharField(label="Password", widget = forms.PasswordInput(attrs={'placeholder':'Passwod'}))
    class Meta:
        model = User
        fields = ['username', 'password']
