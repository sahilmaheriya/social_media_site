from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .forms import CreateUserForm, LoginForm


@login_required(login_url='/login/')
def home_view(request):
    return render(request, 'home.html')

def signup_user(request):
    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/login/')
    else:
        form = CreateUserForm()
    return render(request, 'signup.html', {'form':form})

def login_user(request):
    if request.method == 'POST':
        form = LoginForm(request = request ,data = request.POST)
        if form.is_valid():
            uname = form.cleaned_data['username']
            upass = form.cleaned_data['password']
            user = authenticate(username = uname, password = upass)
            if user is not None:
                login(request, user)
                return redirect('home')
    else:
        form = LoginForm(request.POST)
    return render(request, 'login.html', {'form':form})

def logout_user(request):
    logout(request)
    return redirect('/login')