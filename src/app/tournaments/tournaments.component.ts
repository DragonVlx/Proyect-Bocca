import { Component, OnInit } from '@angular/core';
import { TournamentService } from './services/tournament.service';
import { tap } from "rxjs/operators"
import { tournament } from './interfaces/product.interface';
@Component({
  selector: 'app-tournaments',
  templateUrl: "/tournaments.component.html"

})
export class TournamentsComponent implements OnInit {
  tournaments!: tournament[];
  constructor(private tournamentSvc: TournamentService) { }

  ngOnInit(): void {
    this.tournamentSvc.getTournaments()
      .pipe(
        tap((tournaments: tournament[]) => this.tournaments = tournaments)
      )
      .subscribe()
  }
}
