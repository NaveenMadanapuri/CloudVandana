import java.util.ArrayList;
import java.util.List;

class Employee {
    // Attributes of the Employee class
    private int id;
    private String name;
    private double salary;

    // Constructor to initialize Employee objects
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Method to display employee details
    public void displayDetails() {
        System.out.println("Employee ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: $" + salary);
        System.out.println("------------------------------");
    }

    // Getters and Setters for the attributes
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }
}

public class EmployeeManagementSystem {
    public static void main(String[] args) {
        // Create Employee objects
        Employee employee1 = new Employee(1, "Naveen M", 50000);
        Employee employee2 = new Employee(2, "Praveen M", 60000);
        Employee employee3 = new Employee(3, "Suraveen", 55000);

        // Create a list to store Employee objects
        List<Employee> employeeList = new ArrayList<>();
        employeeList.add(employee1);
        employeeList.add(employee2);
        employeeList.add(employee3);

        // Display the details of all employees in the list
        System.out.println("Employee Details:");
        for (Employee employee : employeeList) {
            employee.displayDetails();
        }
    }
}
