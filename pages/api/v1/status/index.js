function status(request, response) {
  response.status(200).json({ mensagem: "hello world!!" });
  response;
}

export default status;
