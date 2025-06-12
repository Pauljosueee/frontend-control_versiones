import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Proveedor
  getProveedores(): Observable<any> {
    const app = this.http.get(`${API_URL}/proveedor`);
    console.log(app);
    
    return app;
  }

  createProveedor(data: any): Observable<any> {
    return this.http.post(`${API_URL}/proveedor`, data);
  }
  
  updateProveedor(id: number, data: any): Observable<any> {
    return this.http.put(`${API_URL}/proveedor/${id}`, data);
  }
  
  patchProveedor(id: number, data: any): Observable<any> {
    return this.http.patch(`${API_URL}/proveedor/${id}`, data);
  }
  
  deleteProveedor(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/proveedor/${id}`);
  }

  // Institucion
  getInstituciones(): Observable<any> {
    return this.http.get(`${API_URL}/institucion`);
  }
  createInstitucion(data: any): Observable<any> {
    return this.http.post(`${API_URL}/institucion`, data);
  }
  updateInstitucion(id: number, data: any): Observable<any> {
    return this.http.put(`${API_URL}/institucion/${id}`, data);
  }
  patchInstitucion(id: number, data: any): Observable<any> {
    return this.http.patch(`${API_URL}/institucion/${id}`, data);
  }
  deleteInstitucion(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/institucion/${id}`);
  }

  // Versiones
  getVersiones(): Observable<any> {
    return this.http.get(`${API_URL}/versiones`);
  }
  createVersion(data: any): Observable<any> {
    return this.http.post(`${API_URL}/versiones`, data);
  }
  updateVersion(id: number, data: any): Observable<any> {
    return this.http.put(`${API_URL}/versiones/${id}`, data);
  }
  patchVersion(id: number, data: any): Observable<any> {
    return this.http.patch(`${API_URL}/versiones/${id}`, data);
  }
  deleteVersion(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/versiones/${id}`);
  }

  // CambiosAplicados
  getCambiosAplicados(): Observable<any> {
    return this.http.get(`${API_URL}/cambios-aplicados`);
  }
  createCambioAplicado(data: any): Observable<any> {
    return this.http.post(`${API_URL}/cambios-aplicados`, data);
  }
  updateCambioAplicado(id: number, data: any): Observable<any> {
    return this.http.put(`${API_URL}/cambios-aplicados/${id}`, data);
  }
  patchCambioAplicado(id: number, data: any): Observable<any> {
    return this.http.patch(`${API_URL}/cambios-aplicados/${id}`, data);
  }
  deleteCambioAplicado(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/cambios-aplicados/${id}`);
  }

  // Detalle
  getDetalles(): Observable<any> {
    return this.http.get(`${API_URL}/detalle`);
  }
  createDetalle(data: any): Observable<any> {
    return this.http.post(`${API_URL}/detalle`, data);
  }
  updateDetalle(id: number, data: any): Observable<any> {
    return this.http.put(`${API_URL}/detalle/${id}`, data);
  }
  patchDetalle(id: number, data: any): Observable<any> {
    return this.http.patch(`${API_URL}/detalle/${id}`, data);
  }
  deleteDetalle(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/detalle/${id}`);
  }

  constructor(private http: HttpClient) {}
}