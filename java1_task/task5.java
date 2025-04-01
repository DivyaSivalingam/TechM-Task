abstract class Animal 
{
    abstract void makeSound();
}


interface Flyable {
    void fly();
}

class Lion extends Animal {
    @Override
    void makeSound() {
        System.out.println("Lion roars!");
    }
}


class Eagle extends Animal implements Flyable {
    @Override
    void makeSound() {
        System.out.println("Eagle screeches!");
    }

    @Override
    public void fly() {
        System.out.println("Eagle soars in the sky!");
    }
}


public class task5 {
    public static void main(String[] args) 
    {
        Animal lion = new Lion();
        Animal eagle = new Eagle();

        lion.makeSound();
        eagle.makeSound();

        if (eagle instanceof Flyable) {
            ((Flyable) eagle).fly();
        }
    }
}
