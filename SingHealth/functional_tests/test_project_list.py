from selenium import webdriver
from accounts.models import Staff
from django.contrib.staticfiles.testing import LiveServerTestCase, StaticLiveServerTestCase
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.test.client import Client
from django.urls import reverse
import time

class TestLoginPage(LiveServerTestCase):

    # a superuser is created
    # username = abc
    # password = testing123!

    # this is gonna be run before every test functions
    def setUp(self):
        super(TestLoginPage, self).setUp()
        self.browser = webdriver.Chrome('functional_tests/chromedriver')
        
        self.client = Client()

        #create staff user
        self.staff = User.objects.create_user(username = 'abc', is_active = True, password = 'testing123!')
        #self.staff.set_password('testing123!')
        # self.staff.save()

    # this is gonna be run after every test fucntions
    def tearDown(self):
        self.browser.close()
        super(TestLoginPage, self).tearDown()

    def test_successful_login(self):
        expected_url = "http://127.0.0.1:8000/"
        self.browser.get("http://127.0.0.1:8000/login")
        
        self.user = authenticate(username = 'abc', password = 'testing123!')
        if self.user is not None:
            self.user = User.objects.get(username = 'abc')
            print("test " + self.user.username)  # prints def
            print("test " + self.user.password)  # prints hashed password of testing123!
            self.login = self.client.login(username='abc', password='testing123!')
            self.assertEquals(self.login, True)

            self.browser.get("http://127.0.0.1:8000/login")
            #self.browser.get('%s%s' % (self.live_server_url, '/admin/'))
            self.browser.find_element_by_name('username').send_keys('abc')
            time.sleep(0.5)
            self.browser.find_element_by_name('password').send_keys('testing123!')
            time.sleep(0.5)
            self.browser.find_element_by_name('login').click()
            #self.browser.find_element_by_xpath('//input[@value="Log in"]').click()
            time.sleep(1)
            # print(self.browser.page_source)

            self.assertEquals(self.browser.current_url, expected_url)
        else:
            print('fail!!! try harder')

    #it's meant to fail
    """ def test_unsuccessful_login(self):
        
        expected_url = "http://127.0.0.1:8000/login/"
        self.browser.get("http://127.0.0.1:8000/login")
        time.sleep(0.5)
        self.browser.find_element_by_name('username').send_keys('def')
        time.sleep(0.5)
        self.browser.find_element_by_name('password').send_keys('testing123')
        time.sleep(0.5)
        self.browser.find_element_by_name('login').click()
        time.sleep(0.5)

        self.assertEquals(self.browser.current_url, expected_url) """