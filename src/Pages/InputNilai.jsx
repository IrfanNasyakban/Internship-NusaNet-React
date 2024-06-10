/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/InputNilai.css";

const InputNilai = () => {
  const [idMagang, setIdMagang] = useState("");
  const [wawancara, setWawancara] = useState(0);
  const [react, setReact] = useState(0);
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [javascript, setJavascript] = useState(0);
  const [php, setPhp] = useState(0);
  const [nodejs, setNodejs] = useState(0);
  const [golang, setGolang] = useState(0);
  const [mysql, setMysql] = useState(0);
  const [git, setGit] = useState(0);
  const [mikrotik, setMikrotik] = useState(0);
  const [fiberOptik, setFiberOptik] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getMagangById();
  }, []);

  const getMagangById = async () => {
    const response = await axios.get(`http://localhost:5000/magang/${id}`);
    setIdMagang(response.data.idMagang);
  };

  const saveNilai = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("idMagang", idMagang);
    formData.append("wawancara", wawancara);
    formData.append("react", react);
    formData.append("html", html);
    formData.append("css", css);
    formData.append("javascript", javascript);
    formData.append("php", php);
    formData.append("nodejs", nodejs);
    formData.append("golang", golang);
    formData.append("mysql", mysql);
    formData.append("git", git);
    formData.append("mikrotik", mikrotik);
    formData.append("fiberOptik", fiberOptik);

    console.log(formData);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    try {
      await axios.post("http://localhost:5000/nilai", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/nilai");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="nilai-container">
      <h1 className="nilai">
        <span>Input</span> Nilai
      </h1>

      <div className="row-nilai">
        <form onSubmit={saveNilai} className="nilai-form">
          <div className="form-group-nilai">
            <label for="name">ID Magang</label>
            <input
              readOnly
              type="text"
              className=""
              maxlength="50"
              name="idMagang"
              id="idMagang"
              value={idMagang}
              onChange={(e) => setIdMagang(e.target.value)}
            />
          </div>

          <div className="form-group-nilai">
            <label for="name">Wawancara</label>
            <input
              type="number"
              className=""
              placeholder="1-100"
              maxlength="50"
              name="wawancara"
              id="wawancara"
              value={wawancara}
              onChange={(e) => setWawancara(e.target.value)}
            />
          </div>

          <div className="form-group-nilai">
            <label for="name">React</label>
            <input
              type="number"
              className=""
              placeholder="1-100"
              maxlength="50"
              name="react"
              id="react"
              value={react}
              onChange={(e) => setReact(e.target.value)}
            />
          </div>

          <div className="form-group-nilai">
            <label for="name">HTML</label>
            <input
              type="number"
              className=""
              placeholder="1-100"
              maxlength="50"
              name="html"
              id="html"
              value={html}
              onChange={(e) => setHtml(e.target.value)}
            />
          </div>

          <div className="form-group-nilai">
            <label for="name">CSS</label>
            <input
              type="number"
              className=""
              placeholder="1-100"
              maxlength="50"
              name="css"
              id="css"
              value={css}
              onChange={(e) => setCss(e.target.value)}
            />
          </div>

          <div className="form-group-nilai">
            <label for="name">Javascript</label>
            <input
              type="number"
              className=""
              placeholder="1-100"
              maxlength="50"
              name="javascript"
              id="javascript"
              value={javascript}
              onChange={(e) => setJavascript(e.target.value)}
            />
          </div>

          <div className="form-group-nilai">
            <label for="name">PHP</label>
            <input
              type="number"
              className=""
              placeholder="1-100"
              maxlength="50"
              name="php"
              id="php"
              value={php}
              onChange={(e) => setPhp(e.target.value)}
            />
          </div>

          <div className="form-group-nilai">
            <label for="name">NodeJS</label>
            <input
              type="number"
              className=""
              placeholder="1-100"
              maxlength="50"
              name="nodejs"
              id="nodejs"
              value={nodejs}
              onChange={(e) => setNodejs(e.target.value)}
            />
          </div>

          <div className="form-group-nilai">
            <label for="name">Golang</label>
            <input
              type="number"
              className=""
              placeholder="1-100"
              maxlength="50"
              name="golang"
              id="golang"
              value={golang}
              onChange={(e) => setGolang(e.target.value)}
            />
          </div>

          <div className="form-group-nilai">
            <label for="name">Mysql</label>
            <input
              type="number"
              className=""
              placeholder="1-100"
              maxlength="50"
              name="mysql"
              id="mysql"
              value={mysql}
              onChange={(e) => setMysql(e.target.value)}
            />
          </div>

          <div className="form-group-nilai">
            <label for="name">Git</label>
            <input
              type="number"
              className=""
              placeholder="1-100"
              maxlength="50"
              name="git"
              id="git"
              value={git}
              onChange={(e) => setGit(e.target.value)}
            />
          </div>

          <div className="form-group-nilai">
            <label for="name">Mikrotik</label>
            <input
              type="number"
              className=""
              placeholder="1-100"
              maxlength="50"
              name="mikrotik"
              id="mikrotik"
              value={mikrotik}
              onChange={(e) => setMikrotik(e.target.value)}
            />
          </div>

          <div className="form-group-nilai">
            <label for="name">Fiber Optik</label>
            <input
              type="number"
              className=""
              placeholder="1-100"
              maxlength="50"
              name="fiberOptik"
              id="fiberOptik"
              value={fiberOptik}
              onChange={(e) => setFiberOptik(e.target.value)}
            />
          </div>

          <div className="form-group-nilai full-width">
            <button
              type="submit"
              value="Send Message"
              className="btn-nilai"
              name="send"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputNilai;
