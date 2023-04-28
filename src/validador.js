// Conjunto de REGEX para validação de entradas.

function validar_email(email)
{

  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  log.console(regex);
  return regex.test(email);

}
  
function validar_cep(cep){
  // escreva seu código aqui
  const validate_cep = (cep) => { cep = cep. replace(/[^0-9]/gi, ""); 
  return validar_cep;
}

function validar_cpf(cpf){
// escreva seu código aqui

}

function validar_telefone(telefone){
  // escreve seu código aqui

}
