import React, { Component } from 'react';
import './Mahasiswa.css';

export default class Mahasiswa extends Component {

  state = {
    listMahasiswa: [],
    insertData: {
      nim: "",
      nama: "",
      alamat: "",
      hp: "",
      angkatan: "",
      status: ""
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch('http://localhost:3002/mahasiswa?_sort=angkatan&_order=asc', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        this.setState({
          listMahasiswa: data
        })
      })
  }

  deteleData(data) {
    fetch('http://localhost:3002/mahasiswa/' + data, { method: 'DELETE' })
      .then(res => {
        this.getData()
      })
  }

  addData = (event) => {
    let formInsert = { ...this.state.insertData };
    let idData = this.state.insertData.nim;
    formInsert['id'] = idData;
    formInsert[event.target.name] = event.target.value;
    this.setState({
      insertData: formInsert
    })
  }

  saveData = () => {
    fetch('http://localhost:3002/mahasiswa/', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.insertData)
    })
      .then((response) => {
        this.getData();
      })
  }

  render() {
    return (
      <div className="mahasiswa">
        <div className="container">
          <div className="row">
            <div className="col-md text-center py-3">
              <h2>Data Mahasiswa</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="row">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class=" width-100px" id="inputGroup-sizing-default">Nim</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="nim" name="nim" onChange={this.addData} />
                </div>
              </div>
              <div className="row">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class=" width-100px" id="inputGroup-sizing-default">Nama</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="nama" name="nama" onChange={this.addData} />
                </div>
              </div>
              <div className="row">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="width-100px" id="inputGroup-sizing-default">Alamat</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="alamat" name="alamat" onChange={this.addData} />
                </div>
              </div>
              <div className="row">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class=" width-100px" id="inputGroup-sizing-default">Hp</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="hp" name="hp" onChange={this.addData} />
                </div>
              </div>
              <div className="row">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="width-100px" id="inputGroup-sizing-default">Angkatan</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="angkatan" name="angkatan" onChange={this.addData} />
                </div>
              </div>
              <div className="row">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <label class=" width-100px" for="inputGroupSelect01">Status</label>
                  </div>
                  <select class="custom-select" id="status" name="status" onChange={this.addData}>
                    <option selected>--- Status ---</option>
                    <option value="aktif">Aktif</option>
                    <option value="cuti">Cuti</option>
                    <option value="lulus">Lulus</option>
                  </select>
                </div>
              </div>
              <button className="btn btn-primary" onClick={this.saveData}>Simpan</button>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row mt-5">
            <div className="col-md">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Nim</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Alamat</th>
                    <th scope="col">Hp</th>
                    <th scope="col">Angkatan</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.listMahasiswa.map(mhs => {
                      return (
                        <tr>
                          <td>{mhs.nim}</td>
                          <td>{mhs.nama}</td>
                          <td>{mhs.alamat}</td>
                          <td>{mhs.hp}</td>
                          <td>{mhs.angkatan}</td>
                          <td>{mhs.status}</td>
                          <td>
                            <button className="btn btn-warning" onClick={() => this.deteleData(mhs.id)} >Hapus</button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}