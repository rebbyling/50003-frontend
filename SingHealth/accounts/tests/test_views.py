from django.test import TestCase, Client
from django.urls import reverse
from accounts.models import Staff, Tenant, Audit

from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
import unittest

class TestViews(TestCase):

    #will be run before the test
    def setUp(self):
        self.client= Client()
        self.user = User.objects.create_user('abc','abc@mail.com','testing123')
        #self.response = self.client.login(username='abc', password='testing123')
        self.home_url = reverse('home')
        self.registerPage_url = reverse('register')
        self.loginPage_url = reverse('login')
        self.logoutUser_url = reverse('logout')
        self.tenants_url = reverse('tenants')
        self.createAudit_url = reverse('create_audit')
        self.updateAudit_url = reverse('update_audit')
        # self.checklist_url = reverse('checklist')
    
    def test_login_successful(self):
        response = self.client.login(username='abc', password='testing123')
        self.assertTrue(response)
        
        response = self.client.get(reverse('login'))
        # if successfully login, it will redirect to home page
        self.assertEqual(response.status_code, 302)
        
        response = self.client.get(reverse('login'),follow = True)
        self.assertTemplateUsed(response, template_name = 'accounts/dashboard.html')

    def test_home_GET(self):
        response = self.client.get(self.home_url)

        self.assertEquals(response.status_code, 302)
        
        response = self.client.login(username='abc', password='testing123')
        response = self.client.get(self.home_url)
        self.assertEquals(response.status_code, 200)
        
        response = self.client.get(self.home_url,follow = True)
        self.assertTemplateUsed(response, 'accounts/dashboard.html')

    def test_registerPage_POST(self):
        response = self.client.get(self.registerPage_url)
        
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'accounts/register.html')

    def test_loginPage_POST(self):
        response = self.client.get(self.loginPage_url)

        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'accounts/login.html')
    
    def test_logoutUser_view(self):
        response = self.client.get(self.logoutUser_url)

        #status_code for redirect a page is 302
        self.assertEquals(response.status_code, 302)

        # to let it follow thru the redirect view
        response = self.client.get(self.logoutUser_url,follow=True)
        self.assertTemplateUsed(response, 'accounts/login.html')
    
    def test_tenants_view(self):
        response = self.client.get(self.tenants_url)

        self.assertEquals(response.status_code, 302)

        response = self.client.login(username='abc', password='testing123')
        response = self.client.get(self.tenants_url,follow = True)
        self.assertTemplateUsed(response, 'accounts/tenants.html')


    def test_createAudit_POST(self):
        response = self.client.get(self.createAudit_url)

        self.assertEquals(response.status_code, 302)
        
        response = self.client.login(username='abc', password='testing123')
        response = self.client.get(self.createAudit_url,follow = True)
        self.assertTemplateUsed(response, 'accounts/audit_form.html')
    
    def test_updateAudit_view(self):
        response = self.client.get(self.updateAudit_url)

        self.assertEquals(response.status_code, 302)

        response = self.client.login(username='abc', password='testing123')
        response = self.client.get(self.updateAudit_url,follow = True)
        self.assertTemplateUsed(response, 'accounts/audit_form.html')
    
    """ def test_checklist_view_POST(self):
        response = self.client.get(self.checklist_url)

        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'checklist.html') """