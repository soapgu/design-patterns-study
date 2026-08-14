using Builder;

var director = new Director();
var builder = new ConcreteBuilder();

Console.WriteLine("Standard basic product:");
director.BuildMinimalViableProduct(builder);
Console.WriteLine(builder.GetProduct().ListParts());

Console.WriteLine();
Console.WriteLine("Standard full featured product:");
director.BuildFullFeaturedProduct(builder);
Console.WriteLine(builder.GetProduct().ListParts());

Console.WriteLine();
Console.WriteLine("Custom product without a director:");
builder.BuildPartA();
builder.BuildPartC();
Console.WriteLine(builder.GetProduct().ListParts());
