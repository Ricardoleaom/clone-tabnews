function status(request, response) {
  response.status(200).json({ chave: "Estamos em evolução!" });
}

export default status;
