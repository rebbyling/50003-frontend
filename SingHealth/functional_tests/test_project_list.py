from selenium import webdriver
from accounts.models import Staff
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from django.urls import reverse
import time


class TestProjectListPage(StaticLiveServerTestCase):

    #this is gonna be run before every test fucntions
    def setUp(self):
        self.browser = webdriver.Chrome('functional_tests/chromedriver.exe')

    #this is gonna be run after every test fucntions
    def tearDown(self):
        self.browser.close()

    def test_no_projects(self):
        self.browser.get(self.live_server_url)
        time.sleep(20)

        #the user request the page for the first time
        alert = self.browser.find_element_by_class_name('')
        self.assertEquals(
            alert.find_element_by_tag_name('').text,
            'yfafuhf'
        )

    def test_no_projects_button(self):
        self.browser.get(self.live_server_url)
        time.sleep(20)


        add_url = self.live_server_url + reverse('add')
        self.browser.find_element_by_tag_name('a').click()
        self.assertEquals(
            self.browser.current_url,
            add_url
            )