#include <iostream>
#include <emscripten/bind.h>
#include <math.h>
#define PI 3.14159265
using namespace emscripten;

struct Vector
{
  float x, y, direction, magnitude;
};
struct Nav
{
  Vector position;
  bool grouped;
  int index, leader_of_group, size;
};


std::vector<Nav>
    naves;

bool out_size(int desired_index, int size)
{
  return size == 0 ? true : desired_index >= size;
}

int get_size(int size)
{
  return size / sizeof(Nav);
}

float coordinatesToDeg(float x, float y)
{
  float rad = atan2(y, x);
  return rad * 360 / (2 * PI);
}

Vector vector_substraction(Vector a, Vector b)
{
  Vector c;
  c.x = a.x - b.x;
  c.y = a.y - b.y;
  c.magnitude = sqrt(pow(c.x, 2.0) + pow(c.y, 2.0));
  c.direction = coordinatesToDeg(c.x, c.y) * PI / 180;
  return c;
}

void group_navs(Nav *prev, int size, int area)
{
  for (int i = 0; i < size; i++)
  {
    if (!prev->grouped)
    {
      //cout << i << " :" << endl;
      int count = 0;
      for (int j = i + 1; j < size; j++)
      {
        bool onrange = !out_size(j, size);
        if (onrange)
        {
          Nav* next = prev + (count + 1);
          //cout << "onrange " << onrange << " index: " << next->index << endl;
          //if(next->grouped) continue;
          Vector dif = vector_substraction(prev->position, next->position);
          bool overlap = dif.magnitude < (prev->size + area + next->size);
          //std::cout << "segments: " << dif.magnitude << " size: " << (prev->size + area + next->size) << " index: " << next->index << std::endl;
          if (overlap)
          {
            prev->grouped = true;
            next->grouped = true;
            prev->leader_of_group = prev->index;
            next->leader_of_group = prev->index;
            //cout << "Overlaps spaceships: " << prev->index << endl;
          }
        }
        count++;
      }
    }
    prev++;
  }
}

void clear_vector()
{
  naves.clear();
}

void feed(Nav spaceship)
{
  naves.emplace_back(spaceship);
  //int i = naves.size()-1;
  //std::cout << naves[i].index << " " << naves[i].x << " " << naves[i].y << " " << naves[i].direction << " " << naves[i].magnitude << " " << naves[i].size << std::endl;
}

std::vector<Nav> cluster()
{
  int top = naves.size();
  Nav *a = &naves[0];
  group_navs(a, top, 200);
  return naves;
  /*
  Nav *b = &naves[1];
  Nav *c = &naves[2];
  std::cout << "grouped: " << a->grouped << " leader: " << a->leader_of_group << std::endl;
  std::cout << "grouped: " << b->grouped << " leader: " << b->leader_of_group << std::endl;
  std::cout << "grouped: " << c->grouped << " leader: " << c->leader_of_group << std::endl;
  */
}

void init(int size)
{
  naves.reserve(size);
}

EMSCRIPTEN_BINDINGS(my_module)
{
  value_array<Nav>("Nav")
      .element(&Nav::position)
      .element(&Nav::size)
      .element(&Nav::index)
      .element(&Nav::grouped)
      .element(&Nav::leader_of_group);

  value_object<Vector>("Vector")
      .field("x", &Vector::x)
      .field("y", &Vector::y)
      .field("magnitude", &Vector::magnitude)
      .field("direction", &Vector::direction);

  register_vector<Nav>("naves<Nav>");
  function("init", &init);
  function("feed", &feed);
  function("clear_vector", &clear_vector);
  function("cluster", &cluster);
  function("vector_substraction", &vector_substraction);
}