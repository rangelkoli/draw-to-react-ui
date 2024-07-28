from rest_framework import serializers
from .models import User, AIGenerations

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "username","password"]
        extra_kwargs = {
            "password": {"write_only": True}
        }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    

class AIModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = AIGenerations
        fields = ["id", "text", "created_at"]
        extra_kwargs = {
            "created_at": {"read_only": True}
        }
    
    