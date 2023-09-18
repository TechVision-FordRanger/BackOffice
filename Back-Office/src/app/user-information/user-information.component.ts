import { Component, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})

export class UserInformationComponent {

  dataList = [
    { user: 'João Alves', state: 'Pernambuco', vehicle: 'Ranger 2024' },
    { user: 'Maria Silva', state: 'São Paulo', vehicle: 'Ranger 2023' },
    { user: 'Roberto Soares', state: 'Rio de Janeiro', vehicle: 'Ranger 2022' },
    { user: 'Luciana Moraes', state: 'Bahia', vehicle: 'Ranger 2021' },
    { user: 'Pedro Oliveira', state: 'Minas Gerais', vehicle: 'Ranger 2020' },
    { user: 'Fernanda Castro', state: 'Pará', vehicle: 'Ranger 2019' },
    { user: 'Carlos Teixeira', state: 'Amazonas', vehicle: 'Ranger 2018' },
    { user: 'Aline Ribeiro', state: 'Ceará', vehicle: 'Ranger 2017' },
    { user: 'Tiago Lima', state: 'Maranhão', vehicle: 'Ranger 2016' },
    { user: 'Renata Dias', state: 'Espírito Santo', vehicle: 'Ranger 2015' },
    { user: 'Bruno Costa', state: 'Rio Grande do Sul', vehicle: 'Ranger 2014' },
    { user: 'Juliana Martins', state: 'Santa Catarina', vehicle: 'Ranger 2013' },
    { user: 'Ricardo Rocha', state: 'Paraíba', vehicle: 'Ranger 2012' },
    { user: 'Patrícia Santos', state: 'Sergipe', vehicle: 'Ranger 2011' },
    { user: 'Rafael Barbosa', state: 'Goiás', vehicle: 'Ranger 2010' },
    { user: 'Camila Souza', state: 'Mato Grosso', vehicle: 'Ranger 2009' },
    { user: 'Rodrigo Pinto', state: 'Alagoas', vehicle: 'Ranger 2008' },
    { user: 'Larissa Araújo', state: 'Piauí', vehicle: 'Ranger 2007' },
    { user: 'André Mendes', state: 'Mato Grosso do Sul', vehicle: 'Ranger 2006' },
    { user: 'Natália Cardoso', state: 'Rondônia', vehicle: 'Ranger 2005' },
    { user: 'Felipe Gomes', state: 'Tocantins', vehicle: 'Ranger 2004' },
    { user: 'Isabela Ferreira', state: 'Acre', vehicle: 'Ranger 2003' },
    { user: 'Gustavo Nogueira', state: 'Amapá', vehicle: 'Ranger 2002' },
    { user: 'Beatriz Correia', state: 'Roraima', vehicle: 'Ranger 2001' },
    { user: 'Lucas Peixoto', state: 'Distrito Federal', vehicle: 'Ranger 2000' },
    { user: 'Priscila Cunha', state: 'Paraná', vehicle: 'Ranger 1999' },
    { user: 'Marcelo Franco', state: 'Rio Grande do Norte', vehicle: 'Ranger 1998' },
    { user: 'Gabriela Lopes', state: 'Pernambuco', vehicle: 'Ranger 1997' },
    { user: 'Raul Carvalho', state: 'São Paulo', vehicle: 'Ranger 1996' },
    { user: 'Tatiana Sampaio', state: 'Rio de Janeiro', vehicle: 'Ranger 1995' },
    { user: 'Vitor Guimarães', state: 'Bahia', vehicle: 'Ranger 1994' },
    { user: 'Sabrina Melo', state: 'Minas Gerais', vehicle: 'Ranger 1993' },
    { user: 'Henrique Barros', state: 'Pará', vehicle: 'Ranger 1992' },
    { user: 'Daniela Porto', state: 'Amazonas', vehicle: 'Ranger 1991' },
    { user: 'Igor Rezende', state: 'Ceará', vehicle: 'Ranger 1990' },
    { user: 'Lívia Duarte', state: 'Maranhão', vehicle: 'Ranger 1989' },
    { user: 'Otávio Batista', state: 'Espírito Santo', vehicle: 'Ranger 1988' },
    { user: 'Mariana Castro', state: 'Rio Grande do Sul', vehicle: 'Ranger 1987' },
    { user: 'Diego Monteiro', state: 'Santa Catarina', vehicle: 'Ranger 1986' },
    { user: 'Cláudia Ribeiro', state: 'Paraíba', vehicle: 'Ranger 1985' },
    { user: 'Leandro Pereira', state: 'Sergipe', vehicle: 'Ranger 1984' },
    { user: 'Carolina Bernardes', state: 'Goiás', vehicle: 'Ranger 1983' },
    { user: 'Ricardo Andrade', state: 'Mato Grosso', vehicle: 'Ranger 1982' },
    { user: 'Fernanda Almeida', state: 'Alagoas', vehicle: 'Ranger 1981' },
    { user: 'Márcio Silva', state: 'Piauí', vehicle: 'Ranger 1980' },
    { user: 'Adriana Teixeira', state: 'Mato Grosso do Sul', vehicle: 'Ranger 1979' },
    { user: 'Leonardo Rocha', state: 'Rondônia', vehicle: 'Ranger 1978' },
    { user: 'Juliana Freitas', state: 'Tocantins', vehicle: 'Ranger 1977' },
    { user: 'Bruno Moura', state: 'Acre', vehicle: 'Ranger 1976' },
    { user: 'Amanda Lima', state: 'Amapá', vehicle: 'Ranger 1975' }
  ];

  userCount = '2.598';
  activeUsers = '1245';
  inactiveUsers = '3456';

}
