import java.util.*;
class task3
{
    public static void main(String [] args)
    {
        Car car1= new Car("shift","coralla",2020);
        Car car2 = new Car("Honda", "Civic", 2023);
        car1.getter();
        car2.getter();
    }
}
class Car
{
    private  String brand;
    private  String model;
    private int year;

    Car(String brand,String model,int year)
    {
        this.brand=brand;
        this.model=model;
        this.year=year;
    }
    public void getter()
    {
        System.out.println(brand+" "+model+" "+year);
    }
}