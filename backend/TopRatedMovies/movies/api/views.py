from rest_framework.generics import ListAPIView,RetrieveAPIView
from movies.models import Movie
from .serializers import MovieSerializer


#Creating the List View
class MovieListView(ListAPIView):
    queryset =  Movie.objects.all()
    serializer_class = MovieSerializer

#Creating the Details View
class MovieDetailView(RetrieveAPIView):
    queryset =  Movie.objects.all()
    serializer_class = MovieSerializer