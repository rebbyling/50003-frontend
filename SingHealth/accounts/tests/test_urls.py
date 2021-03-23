from django.test import SimpleTestCase
from django.urls import reverse, resolve
from accounts.views import registerPage, loginPage, logoutUser, home, tenants, staff, createAudit, updateAudit, audit_details,export_excel, tenantchartview #checklist_view

class TestUrls(SimpleTestCase):

    def test_login_url_is_resolved(self):
        url = reverse('login')
        print(resolve(url)) #check which views does django render when it request for /login
        self.assertEquals(resolve(url).func, loginPage)

    def test_register_url_is_resolved(self):
        url = reverse('register')
        print(resolve(url))
        self.assertEquals(resolve(url).func, registerPage)
    
    def test_logout_url_is_resolved(self):
        url = reverse('logout')
        print(resolve(url))
        self.assertEquals(resolve(url).func, logoutUser)
    
    def test_home_url_is_resolved(self):
        url = reverse('home')
        print(resolve(url))
        self.assertEquals(resolve(url).func, home)
    
    def test_tenants_url_is_resolved(self):
        url = reverse('tenants')
        print(resolve(url))
        self.assertEquals(resolve(url).func, tenants)

    def test_staff_url_is_resolved(self):
            #id = 1 (integer) / 2,3,4
        url = reverse('staff', args=[1])
        print(resolve(url))
        self.assertEquals(resolve(url).func, staff)
 
    def test_createAudit_url_is_resolved(self):
        url = reverse('create_audit')
        print(resolve(url))
        self.assertEquals(resolve(url).func, createAudit)

    def test_updateAudit_url_is_resolved(self):
        url = reverse('update_audit')
        print(resolve(url))
        self.assertEquals(resolve(url).func, updateAudit)

    """ def test_checklist_url_is_resolved(self):
        url = reverse('checklist')
        print(resolve(url))
        self.assertEquals(resolve(url).func, checklist_view) """
    
    def test_tenantsD_url_is_resolved(self):
            #id = 1 (integer) / 2,3,4
        url = reverse('tenantsDetail', args=[1])
        print(resolve(url))
        self.assertEquals(resolve(url).func, audit_details)

    def test_chart_url_is_resolved(self):
        url = reverse('chart')
        print(resolve(url))
        self.assertEquals(resolve(url).func.view_class,tenantchartview)



