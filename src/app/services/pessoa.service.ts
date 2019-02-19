import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Pessoa } from './pessoa';
import { Observable } from 'rxjs';

@Injectable()
export class PessoaService {

    private baseUrlService: string = '';
    private headers: Headers;
    private options: HttpRequest<any>;

    constructor(private http: HttpClient, private configService: ConfigService) {

        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + '/pessoa/';

        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
        //this.options = new RequestOptions({ headers: this.headers});
    }

    /**CONSULTA TODAS AS PESSOAS CADASTRADAS */
    getPessoas(): Observable<any> {
        return this.http.get<any>(this.baseUrlService);
    }

    /**ADICIONA UMA NOVA PESSOA */
    addPessoa(pessoa: Pessoa): Observable<any> {
        return this.http.post<any>(this.baseUrlService, pessoa);
    }

    /**EXCLUI UMA PESSOA */
    excluirPessoa(codigo:number): Observable<any> {
        return this.http.delete(this.baseUrlService + codigo);
    }

    /**CONSULTA UMA PESSOA PELO CÓDIGO */
    getPessoa(codigo:number): Observable<any> {
        return this.http.get<any>(this.baseUrlService + codigo);
    }
 
    /**ATUALIZA INFORMAÇÕES DA PESSOA */
    atualizarPessoa(pessoa:Pessoa): Observable<any> { 
        return this.http.put<any>(this.baseUrlService, pessoa);
    }

}