import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css'],
})
export class UserInformationComponent {
  dataList: any[] = [];
  countryKey: string = 'state';
  selectedCountry: string = 'Selecione País';

  countryNameMap: { [key: string]: string } = {
    'BR': 'Brasil',
    'US': 'U.S.A',
    'AR': 'Argentina'
  };

  dataListBr = [
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
    { user: 'Mariana Castro',
      state: 'Rio Grande do Sul',
      vehicle: 'Ranger 1987',
    },
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
    { user: 'Amanda Lima', state: 'Amapá', vehicle: 'Ranger 1975' },
  ];

  dataListArg = [
    { user: 'Juan Pérez', city: 'Buenos Aires', vehicle: 'Ranger 2024' },
    { user: 'María González', city: 'Rosario', vehicle: 'Ranger 2023' },
    { user: 'Roberto Rodríguez', city: 'Córdoba', vehicle: 'Ranger 2022' },
    { user: 'Luciana Martínez', city: 'Mendoza', vehicle: 'Ranger 2021' },
    { user: 'Pedro Gómez', city: 'La Plata', vehicle: 'Ranger 2020' },
    { user: 'Fernanda López', city: 'San Miguel de Tucumán', vehicle: 'Ranger 2019' },
    { user: 'Carlos Fernández', city: 'Mar del Plata', vehicle: 'Ranger 2018' },
    { user: 'Alicia Sánchez', city: 'Salta', vehicle: 'Ranger 2017' },
    { user: 'Esteban Morales', city: 'Santa Fe', vehicle: 'Ranger 2016' },
    { user: 'Renata Paredes', city: 'San Juan', vehicle: 'Ranger 2015' },
    { user: 'Bruno Vargas', city: 'Corrientes', vehicle: 'Ranger 2014' },
    { user: 'Juliana Ortiz', city: 'Bahía Blanca', vehicle: 'Ranger 2013' },
    { user: 'Ricardo Castro', city: 'Resistencia', vehicle: 'Ranger 2012' },
    { user: 'Patricia Ramos', city: 'Neuquén', vehicle: 'Ranger 2011' },
    { user: 'Rafael Muñoz', city: 'Santiago del Estero', vehicle: 'Ranger 2010' },
    { user: 'Camila Torres', city: 'Concordia', vehicle: 'Ranger 2009' },
    { user: 'Rodrigo Méndez', city: 'Comodoro Rivadavia', vehicle: 'Ranger 2008'},
    { user: 'Larissa Núñez', city: 'La Rioja', vehicle: 'Ranger 2007' },
    { user: 'André Guerrero', city: 'Trelew', vehicle: 'Ranger 2006' },
    { user: 'Natalia Ponce', city: 'San Luis', vehicle: 'Ranger 2005' },
  ];

  dataListUSA = [
    { user: 'John Doe', state: 'California', vehicle: 'Ranger 2024' },
    { user: 'Jane Smith', state: 'Texas', vehicle: 'Ranger 2023' },
    { user: 'Robert Johnson', state: 'Florida', vehicle: 'Ranger 2022' },
    { user: 'Emily White', state: 'New York', vehicle: 'Ranger 2021' },
    { user: 'Peter Brown', state: 'Illinois', vehicle: 'Ranger 2020' },
    { user: 'Linda Black', state: 'Pennsylvania', vehicle: 'Ranger 2019' },
    { user: 'James Wilson', state: 'Ohio', vehicle: 'Ranger 2018' },
    { user: 'Barbara Taylor', state: 'Georgia', vehicle: 'Ranger 2017' },
    { user: 'Michael Davis', state: 'North Carolina', vehicle: 'Ranger 2016' },
    { user: 'Elizabeth Martinez', state: 'Michigan', vehicle: 'Ranger 2015' },
    { user: 'William Garcia', state: 'New Jersey', vehicle: 'Ranger 2014' },
    { user: 'Patricia Anderson', state: 'Virginia', vehicle: 'Ranger 2013' },
    { user: 'Richard Lee', state: 'Washington', vehicle: 'Ranger 2012' },
    { user: 'Susan Moore', state: 'Arizona', vehicle: 'Ranger 2011' },
    { user: 'Joseph Miller', state: 'Massachusetts', vehicle: 'Ranger 2010' },
    { user: 'Margaret Jones', state: 'Indiana', vehicle: 'Ranger 2009' },
    { user: 'Charles Rodriguez', state: 'Tennessee', vehicle: 'Ranger 2008' },
    { user: 'Charlotte Johnson', state: 'Missouri', vehicle: 'Ranger 2007' },
    { user: 'Thomas Nelson', state: 'Maryland', vehicle: 'Ranger 2006' },
    { user: 'Christine Lee', state: 'Wisconsin', vehicle: 'Ranger 2005' },
  ];

  dataListAll = [
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
    { user: 'Juliana Martins', state: 'Santa Catarina', vehicle: 'Ranger 2013'},
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
    { user: 'Lucas Peixoto', state: 'Distrito Federal', vehicle: 'Ranger 2000'},
    { user: 'Priscila Cunha', state: 'Paraná', vehicle: 'Ranger 1999' },
    { user: 'Marcelo Franco', state: 'Rio Grande do Norte', vehicle: 'Ranger 1998'},
    { user: 'Gabriela Lopes', state: 'Pernambuco', vehicle: 'Ranger 1997' },
    { user: 'Raul Carvalho', state: 'São Paulo', vehicle: 'Ranger 1996' },
    { user: 'Tatiana Sampaio', state: 'Rio de Janeiro', vehicle: 'Ranger 1995'},
    { user: 'Vitor Guimarães', state: 'Bahia', vehicle: 'Ranger 1994' },
    { user: 'Sabrina Melo', state: 'Minas Gerais', vehicle: 'Ranger 1993' },
    { user: 'Henrique Barros', state: 'Pará', vehicle: 'Ranger 1992' },
    { user: 'Daniela Porto', state: 'Amazonas', vehicle: 'Ranger 1991' },
    { user: 'Igor Rezende', state: 'Ceará', vehicle: 'Ranger 1990' },
    { user: 'Lívia Duarte', state: 'Maranhão', vehicle: 'Ranger 1989' },
    { user: 'Otávio Batista', state: 'Espírito Santo', vehicle: 'Ranger 1988' },
    { user: 'Mariana Castro', state: 'Rio Grande do Sul', vehicle: 'Ranger 1987'},
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
    { user: 'Amanda Lima', state: 'Amapá', vehicle: 'Ranger 1975' },
    { user: 'Juan Pérez', state: 'Buenos Aires', vehicle: 'Ranger 2024' },
    { user: 'María González', state: 'Rosario', vehicle: 'Ranger 2023' },
    { user: 'Roberto Rodríguez', state: 'Córdoba', vehicle: 'Ranger 2022' },
    { user: 'Luciana Martínez', state: 'Mendoza', vehicle: 'Ranger 2021' },
    { user: 'Pedro Gómez', state: 'La Plata', vehicle: 'Ranger 2020' },
    { user: 'Fernanda López', state: 'San Miguel de Tucumán', vehicle: 'Ranger 2019' },
    { user: 'Carlos Fernández', state: 'Mar del Plata', vehicle: 'Ranger 2018'},
    { user: 'Alicia Sánchez', state: 'Salta', vehicle: 'Ranger 2017' },
    { user: 'Esteban Morales', state: 'Santa Fe', vehicle: 'Ranger 2016' },
    { user: 'Renata Paredes', state: 'San Juan', vehicle: 'Ranger 2015' },
    { user: 'Bruno Vargas', state: 'Corrientes', vehicle: 'Ranger 2014' },
    { user: 'Juliana Ortiz', state: 'Bahía Blanca', vehicle: 'Ranger 2013' },
    { user: 'Ricardo Castro', state: 'Resistencia', vehicle: 'Ranger 2012' },
    { user: 'Patricia Ramos', state: 'Neuquén', vehicle: 'Ranger 2011' },
    { user: 'Rafael Muñoz', state: 'Santiago del Estero', vehicle: 'Ranger 2010' },
    { user: 'Camila Torres', state: 'Concordia', vehicle: 'Ranger 2009' },
    { user: 'Rodrigo Méndez', state: 'Comodoro Rivadavia', vehicle: 'Ranger 2008'},
    { user: 'Larissa Núñez', state: 'La Rioja', vehicle: 'Ranger 2007' },
    { user: 'André Guerrero', state: 'Trelew', vehicle: 'Ranger 2006' },
    { user: 'Natalia Ponce', state: 'San Luis', vehicle: 'Ranger 2005' },
    { user: 'John Doe', state: 'California', vehicle: 'Ranger 2024' },
    { user: 'Jane Smith', state: 'Texas', vehicle: 'Ranger 2023' },
    { user: 'Robert Johnson', state: 'Florida', vehicle: 'Ranger 2022' },
    { user: 'Emily White', state: 'New York', vehicle: 'Ranger 2021' },
    { user: 'Peter Brown', state: 'Illinois', vehicle: 'Ranger 2020' },
    { user: 'Linda Black', state: 'Pennsylvania', vehicle: 'Ranger 2019' },
    { user: 'James Wilson', state: 'Ohio', vehicle: 'Ranger 2018' },
    { user: 'Barbara Taylor', state: 'Georgia', vehicle: 'Ranger 2017' },
    { user: 'Michael Davis', state: 'North Carolina', vehicle: 'Ranger 2016' },
    { user: 'Elizabeth Martinez', state: 'Michigan', vehicle: 'Ranger 2015' },
    { user: 'William Garcia', state: 'New Jersey', vehicle: 'Ranger 2014' },
    { user: 'Patricia Anderson', state: 'Virginia', vehicle: 'Ranger 2013' },
    { user: 'Richard Lee', state: 'Washington', vehicle: 'Ranger 2012' },
    { user: 'Susan Moore', state: 'Arizona', vehicle: 'Ranger 2011' },
    { user: 'Joseph Miller', state: 'Massachusetts', vehicle: 'Ranger 2010' },
    { user: 'Margaret Jones', state: 'Indiana', vehicle: 'Ranger 2009' },
    { user: 'Charles Rodriguez', state: 'Tennessee', vehicle: 'Ranger 2008' },
    { user: 'Charlotte Johnson', state: 'Missouri', vehicle: 'Ranger 2007' },
    { user: 'Thomas Nelson', state: 'Maryland', vehicle: 'Ranger 2006' },
    { user: 'Christine Lee', state: 'Wisconsin', vehicle: 'Ranger 2005' },
  ];

  userCount = '2.598';
  activeUsers = '1245';
  inactiveUsers = '3456';

  constructor() {
    this.dataList = this.dataListAll;
  }

  setCountry(countryCode: string) {
    this.selectedCountry = this.countryNameMap[countryCode];
    switch (countryCode) {
      case 'BR':
        this.dataList = this.dataListBr;
        this.countryKey = 'state';
        break;
      case 'US':
        this.dataList = this.dataListUSA;
        this.countryKey = 'state';
        break;
      case 'AR':
        this.dataList = this.dataListArg;
        this.countryKey = 'city';
        break;
      case 'all':
        this.dataList = this.dataListAll;
        this.countryKey = 'state || city';
        break;
    }
  }
}
