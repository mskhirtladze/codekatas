public class VisualStudio {
	Compiler compiler;
	public VisualStudio(Compiler compiler) {
	    this.compiler = compiler;
	}

	public void Run(string code) {
		var exe = compiler.Compile(code);
		exe.Execute();
	}
}

public abstract class Compiler {	
	public Exe Compile(string code) {
		VerifySyntax();
		Output();
		return CreateExe();
	}

	private void VerifySyntax() {
		Console.WriteLine("Checking Syntax...");
	}

	protected abstract void Output();

	private Exe CreateExe() {		
		return new Exe();
	}
}

public class VsCompiler : Compiler {
	protected override void Output() {
		Console.WriteLine("Visual Studio Compiler Output Message");
	}
}

public class MonoCompiler : Compiler {
	protected override void Output() {
		Console.WriteLine("Mono Compiler Output Message");
	}
}

public class Exe {
	public void Execute() {
		Console.WriteLine("At Last, I'm Running!");
	}
}

var compiler = new VsCompiler();
var editor = new VisualStudio(compiler);
editor.Run("Awesome Code");
