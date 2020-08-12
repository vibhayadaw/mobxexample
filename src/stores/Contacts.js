import { observable, action, computed } from 'mobx';

class Contacts {
  @observable all = [
    {id: 1, name: 'Vibha', email:'vibhayadaw@gmail.com'},
    {id: 2, name: 'Aadya', email:'aadyasuryavanshi@gmail.com'},
    {id: 3, name: 'Vikrant', email:'vikrantsuryavanshi@gmail.com'}
  ];
}

export default new Contacts();