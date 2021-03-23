from django.test import TestCase
from accounts.models import Tenant, Audit, Staff

class TestStaffModel(TestCase):
    def setUp(self):
        Staff.objects.create(name = 'Bob', email = 'bob@mail.com')

    def test_name_label(self):
        staff = Staff.objects.get(id=1)
        field_label = staff._meta.get_field('name').verbose_name
        self.assertEqual(field_label, 'name')
    
    def test_email_label(self):
        staff = Staff.objects.get(id=1)
        field_label = staff._meta.get_field('email').verbose_name
        self.assertEqual(field_label, 'email')
    
    def test_date_joined_label(self):
        staff = Staff.objects.get(id=1)
        field_label = staff._meta.get_field('date_joined').verbose_name
        self.assertEqual(field_label, 'date joined')

    def test_name_max_length(self):
        staff = Staff.objects.get(id=1)
        max_length = staff._meta.get_field('name').max_length
        self.assertEqual(max_length, 100)

    def test_email_max_length(self):
        staff = Staff.objects.get(id=1)
        max_length = staff._meta.get_field('email').max_length
        self.assertEqual(max_length, 100)

class TestTenantsModel(TestCase):
    def setUp(self):
        Tenant.objects.create(name='chicken rice', status = 'Pending', category = 'food', description = '100 marks given')

    def test_name_label(self):
        tenant = Tenant.objects.get(id=1)
        field_label = tenant._meta.get_field('name').verbose_name
        self.assertEqual(field_label, 'name')
    
    def test_name_max_length(self):
        tenant = Tenant.objects.get(id=1)
        max_length = tenant._meta.get_field('name').max_length
        self.assertEqual(max_length, 100)
    
    def test_status_label(self):
        tenant = Tenant.objects.get(id=1)
        field_label = tenant._meta.get_field('status').verbose_name
        self.assertEqual(field_label, 'status')
    
    def test_name_max_length(self):
        tenant = Tenant.objects.get(id=1)
        max_length = tenant._meta.get_field('status').max_length
        self.assertEqual(max_length, 50)

    def test_category_label(self):
        tenant = Tenant.objects.get(id=1)
        field_label = tenant._meta.get_field('category').verbose_name
        self.assertEqual(field_label, 'category')
    
    def test_category_max_length(self):
        tenant = Tenant.objects.get(id=1)
        max_length = tenant._meta.get_field('category').max_length
        self.assertEqual(max_length, 100)

    def test_description_label(self):
        tenant = Tenant.objects.get(id=1)
        field_label = tenant._meta.get_field('description').verbose_name
        self.assertEqual(field_label, 'description')
    
    def test_category_max_length(self):
        tenant = Tenant.objects.get(id=1)
        max_length = tenant._meta.get_field('description').max_length
        self.assertEqual(max_length, 100)

    def test_date_created_label(self):
        tenant = Tenant.objects.get(id=1)
        field_label = tenant._meta.get_field('date_created').verbose_name
        self.assertEqual(field_label, 'date created')

class TestAuditModels(TestCase):
    def setUp(self):
        tenant = Tenant.objects.create(name='chicken rice', status = 'Pending', category = 'food', description = '100 marks given')
        staff = Staff.objects.create(name = 'Bob', email = 'bob@mail.com')
        Audit.objects.create(status = 'Pending', tenant = tenant, staff = staff, comment= '0 marks')
    
    def test_status_label(self):
        audit = Audit.objects.get(id=1)
        field_label = audit._meta.get_field('status').verbose_name
        self.assertEqual(field_label, 'status')
    
    def test_tenant_label(self):
        audit = Audit.objects.get(id=1)
        field_label = audit._meta.get_field('tenant').verbose_name
        self.assertEqual(field_label, 'tenant')

    def test_staff_label(self):
        audit = Audit.objects.get(id=1)
        field_label = audit._meta.get_field('staff').verbose_name
        self.assertEqual(field_label, 'staff')

    def test_comment_label(self):
        audit = Audit.objects.get(id=1)
        field_label = audit._meta.get_field('comment').verbose_name
        self.assertEqual(field_label, 'comment')
