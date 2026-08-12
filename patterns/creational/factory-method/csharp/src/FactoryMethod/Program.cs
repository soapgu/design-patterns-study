using FactoryMethod;

RunCreator(new ConcreteCreator1());
Console.WriteLine();
RunCreator(new ConcreteCreator2());

static void RunCreator(Creator creator)
{
    Console.WriteLine($"App: Launched with {creator.GetType().Name}.");
    Console.WriteLine("Client: The concrete creator is unknown to this code.");
    Console.WriteLine(creator.SomeOperation());
}
