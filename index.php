<!DOCTYPE html>
<html lang="en">
<head>
    <script src="scripts/creditos.js"></script>
    <script src="scripts/elegido.js"></script>
    <script src="scripts/50.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcular nota test</title>
</head>
<body>
    <h1 id="titulo">Calcula la nota de tu tipo test de manera sencilla</h1>
    <div id="form">
        <label for="">Número de preguntas</label>
        <input type="number" name="total" id="total" value=20>
        <label for="">Preguntas acertadas</label>
        <input type="number" name="acertadas" id="acertadas"value=0>
        <label for="">Puntos por la pregunta acertada</label>
        <input type="number" step=.0001 name="valor" id="valor" value=0.5>
        <label for="">Preguntas erradas</label>
        <input type="number" name="erradas" id="erradas"value=0>
        <label for="">Penalización</label>
        <input type="number" step=.0001 name="pen" id="pen" value=0.125>
        <input id="formb" type="submit" class="btn btn-primary mb-2" value="Calcular nota 50%" onclick="calcular1()">
        <label for="">Escriba el porcentaje minimo para aprobar</label>
        <input type="number" name="porcentaje" id="percent" value=60> 
        <input type="submit" class="btn btn-primary mb-2" value="Mostrar con porcentaje seleccionado" onclick="calcular2()">
        <p>(Aviso:No metas números negativos, está pensado para coger su valor absoluto)</p>
    </div>
    <div id="respuesta"></div>
    <div id="boton"></div>
</body>
</html>