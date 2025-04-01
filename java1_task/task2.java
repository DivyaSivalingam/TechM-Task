import java.util.*;
class task2{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner (System.in);
        int stock_value=sc.nextInt();
        int sum=0;
        if(stock_value<50)
        {
            System.out.println("low");
        }
        else if(stock_value>50 && stock_value<200)
        {
            System.out.println("medium");
        }
        else{
            System.out.println("high");
        }


        for(int i=1;i<=10;i++)
        {
            if(i==5)
            {
                continue;
            }else{
                System.out.print(i+" ");
            }
        }
        System.out.println();
        while(sum<100)
        {
            sum+=10;
        }
        System.out.print(sum);

    }
}