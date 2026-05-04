document.getElementById('formCadastro').addEventListener('submit', function (event) {
    event.preventDefault();

    let nome = document.getElementById('Nome').value;
    let cpf = document.getElementById('CPF').value;
    let nascimento = document.getElementById('Nascimento').value;
    let telefone = document.getElementById('Telefone').value;
    let email = document.getElementById('Email').value;
    let endereco = document.getElementById('Endereco').value;
    let cidade = document.getElementById('Cidade').value;
    let estado = document.getElementById('Estado').value;
    let cep = document.getElementById('CEP').value;
    let curso = document.getElementById('Curso').value;
    let matricula = document.getElementById('Matricula').value;
    let senha = document.getElementById('Senha').value;
    let confirmarSenha = document.getElementById('ConfirmarSenha').value;

    
    if (nome.length < 3) return alert("Nome inválido");
    if (cpf.length < 11) return alert("CPF inválido");
    if (nascimento == "") return alert("Data de nascimento obrigatória");
    if (telefone.length < 10) return alert("Telefone inválido");
    if (!email.includes("@")) return alert("Email inválido");
    if (endereco == "") return alert("Endereço obrigatório");
    if (cidade == "") return alert("Cidade obrigatória");
    if (estado == "Selecione Seu Estado") return alert("Estado obrigatório");
    if (cep.length < 8) return alert("CEP inválido");
    if (curso == "") return alert("Curso obrigatório");
    if (matricula == "") return alert("Matrícula obrigatória");
    if (senha.length < 6) return alert("Senha deve ter pelo menos 6 caracteres");
    if (senha !== confirmarSenha) return alert("As senhas não coincidem");

    let novoAluno = {
        nome: nome,
        cpf: cpf,
        nascimento: nascimento,
        telefone: telefone,
        email: email,
        endereco: endereco,
        cidade: cidade,
        estado: estado,
        cep: cep,
        curso: curso,
        matricula: matricula
    };

    alert("Cadastro realizado com sucesso!");

    console.log("Formulário enviado!");
    console.log(JSON.stringify(novoAluno, null, 2));
    document.getElementById('formCadastro').reset();
});