class MyApp extends React.Component {
  downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('myInput').value], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  render() {
    return (
      <div>
        <input id="myInput" />
        <button onClick={this.downloadTxtFile}>Download txt</button>
      </div>
    );
  }
}
