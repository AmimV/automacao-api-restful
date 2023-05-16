#language:pt
  Funcionalidade: API Testing
    Eu como um usuário
    Quero testar a API
    Para validar o response

  Esquema do Cenário: Validar API utilizando o método "<metodo>"
    Dado O usuario define a url principal "https://api.restful-api.dev/objects"
    Então Valida a requisição "<metodo>"

    Exemplos:
      | metodo  |
      | GET     |
      | POST    |
      | PUT     |
      | PATCH   |
      | DELETE  |

  

