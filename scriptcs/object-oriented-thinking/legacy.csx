public class VisualStudio {
	public void Run(string code) {
		var compiler = new VsCompiler();
		var exe = compiler.Compile(code);
		exe.Execute();
	}
}

public class VsCompiler {	
	public Exe Compile(string code) {
		VerifySyntax();
		Output();
		return CreateExe();
	}

	private void VerifySyntax() {
		Console.WriteLine("Checking Syntax...");
	}

	private void Output() {
		Console.WriteLine("Visual Studio Compiler Output Message");
	}

	private Exe CreateExe() {		
		return new Exe();
	}
}

public class Exe {
	public void Execute() {
		Console.WriteLine("At Last, I'm Running!");
	}
}

var editor = new VisualStudio();
editor.Run("Awesome Code");