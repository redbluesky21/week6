import { Component, OnInit } from '@angular/core';
import { Cons } from '../shared/cons';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  daftarMhs:Cons[] = [];
  nim = '';
  nama = '';
  kelas = '';
  mahasiswa;
  constructor() { }

  ngOnInit() {
  }

  tambahMhs(){
    this.mahasiswa = new Cons(this.nim, this.nama, this.kelas);
    this.daftarMhs.push(this.mahasiswa);
    this.nim = '';
    this.nama = '';
    this.kelas = '';
  }
}

