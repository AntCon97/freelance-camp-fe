import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://conradsportfolio.com', 'Ruby on Rails', 150, 120, 15, 'AntCon1000@gmail.com')

	proposalTwo: Proposal = new Proposal(12, 'DEF Company', 'http://conradsportfolio.com', 'Ruby on Rails', 120, 110, 17, 'AntCon1000@gmail.com')

	proposalThree: Proposal = new Proposal(102, 'GHI Company', 'http://conradsportfolio.com', 'Ruby on Rails', 100, 100, 20, 'AntCon1000@gmail.com')

	proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree]

}