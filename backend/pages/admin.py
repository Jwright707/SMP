from django.contrib import admin
from django.contrib.admin import register
from .models import *
from import_export.admin import ImportExportModelAdmin


@register(Home)
class HomeAdmin(ImportExportModelAdmin):
    list_display = ("smp_description" , ) 

@register(HomeVision)
class HomeVisionAdmin(ImportExportModelAdmin):
    list_display = ('title', 'description', 'image', ) 
@register(faq)
class faqVisionAdmin(ImportExportModelAdmin):
    list_display = ('question', 'answer', )


@register(StudentTeam)
class StudentTeamAdmin(ImportExportModelAdmin):
    list_display = ('name', 'photo', 'facebook', 'linkden', 'branch', 'year', 'is_coordinator','position',) 

@register(branch)
class branchAdmin(ImportExportModelAdmin):
    list_display = ("branch_name", )

@register(ContactDetails)
class branchAdmin(ImportExportModelAdmin):
    list_display =  ('name', 'photo', 'facebook', 'linkden', 'branch', 'year', 'mobile', 'email', )

@register(Mentor)
class MentorAdmin(ImportExportModelAdmin):
    list_display =  ('branch', 'name', 'photo', 'facebook', 'linkden', )

@register(Blogs)
class BlogsAdmin(ImportExportModelAdmin):
    list_display =  ('title', 'author', 'created_at')

@register(Events)
class EventsAdmin(ImportExportModelAdmin):
    list_display =  ('title', 'venue', 'date')