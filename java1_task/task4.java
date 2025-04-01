import java.util.*;
class task4
{
    public static void main(String[] args)
    {
        double radi=5;
        int length=2;
        int breath=3;
        Shape shape= new Shape();
        shape.getArea();
        Circle circle = new Circle();
        circle.getArea(radi);
        Rectangle rectangle = new Rectangle();
        rectangle.getArea(length,breath);
    }
}
class Shape{
    public void getArea()
    {
        System.out.println(0);
    }
}

class Circle extends Shape
{
     public void getArea(double radi)
    {
        System.out.println(3.14*radi*radi);
    }
}
class Rectangle extends Shape
{
     public void getArea(int length,int breath)
    {
        System.out.println(length*breath);
    }
}