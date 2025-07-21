import java.util.Scanner;
public class Lab1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a: ");
        String inputA = scanner.nextLine();

        System.out.print("Enter b: ");
        String inputB = scanner.nextLine();

        System.out.print("Enter c: ");
        String inputC = scanner.nextLine();

        Integer a = parseUnsignedShort(inputA);
        Integer b = parseUnsignedShort(inputB);
        Integer c = parseUnsignedShort(inputC);
        if (a == null || b == null || c == null || a == 0) {
            System.out.println("Input Invalid");
            return;
        }
        solveQuadratic(a, b, c);
    }
    private static Integer parseUnsignedShort(String s) {
        try {
            int value = Integer.parseInt(s);
            if (value < 0 || value > 65535) return null;
            return value;
        } catch (NumberFormatException e) {
            return null;
        }
    }
    public static void solveQuadratic(int a, int b, int c) {
        double delta = b * b - 4.0 * a * c;

        if (delta < 0) {
            System.out.println("The equation has no solution");
            return;
        }
        System.out.println("Ok");
        System.out.printf("Delta = %.2f\n", delta);

        if (delta == 0) {
            double x = -b / (2.0 * a);
            System.out.printf("X1 = X2 = %.4f\n", x);
        } else {
            double sqrtDelta = Math.sqrt(delta);
            double x1 = (-b + sqrtDelta) / (2.0 * a);
            double x2 = (-b - sqrtDelta) / (2.0 * a);
            System.out.printf("X1 = %.4f\n", x1);
            System.out.printf("X2 = %.4f\n", x2);
        }
    }
}