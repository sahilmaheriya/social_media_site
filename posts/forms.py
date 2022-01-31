from django import forms
from django.db.models import fields
from django.forms import widgets
from .models import Post, Comment

class PostModelForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ('image','content')
        widgets = {'image':forms.FileInput(attrs={'class':'form-control mb-4'}),
                    'content':forms.Textarea(attrs={'class':'form-control mb-4', 'placeholder':'What do you want to talk about?'})}

class CommentModelForm(forms.ModelForm):
    body = forms.CharField(label='' ,widget= forms.Textarea(attrs={'class':'form-control', 'rows':1, 'placeholder':'Add a comment...'}))
    class Meta:
        model = Comment
        fields = ('body',)
