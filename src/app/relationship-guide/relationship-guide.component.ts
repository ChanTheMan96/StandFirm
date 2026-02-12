import { Component, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BibleService, BiblePassage } from '../services/bible.service';

interface GuideEntry {
  title: string;
  ref: string;
  takeaway: string;
}

@Component({
  selector: 'app-relationship-guide',
  templateUrl: './relationship-guide.component.html',
  styleUrls: ['./relationship-guide.component.scss']
})
export class RelationshipGuideComponent implements OnInit {
  loading = true;
  entries: GuideEntry[] = [
    { title: 'Love & Selflessness', ref: '1 Corinthians 13:4-7', takeaway: 'Patience, kindness, and forgiveness are the foundation of love.' },
    { title: 'Mutual Respect', ref: 'Ephesians 5:21', takeaway: 'Relationships should be built on mutual respect and humility.' },
    { title: 'Forgiveness & Peace', ref: 'Colossians 3:13', takeaway: 'Forgiveness keeps relationships alive.' },
    { title: 'Communication & Kindness', ref: 'Proverbs 15:1', takeaway: 'How you say things matters as much as what you say.' },
    { title: 'Strength in Unity', ref: 'Ecclesiastes 4:9-10', takeaway: 'A healthy relationship means lifting each other up.' },
    { title: 'Encouragement', ref: '1 Thessalonians 5:11', takeaway: 'Speak life and encouragement into your partner.' },
    { title: 'Patience & Humility', ref: 'Philippians 2:3-4', takeaway: "Put your partner’s needs above pride." },
    { title: 'Gentle Communication', ref: 'James 1:19', takeaway: 'Listening well prevents unnecessary conflict.' },
    { title: 'Faithful Love', ref: "Song of Songs 8:7", takeaway: 'True love is priceless and enduring.' },
    { title: 'Building Each Other Up', ref: 'Romans 12:10', takeaway: 'Love deepens when you choose to honor your partner.' },
    { title: 'Peace & Harmony', ref: 'Romans 12:18', takeaway: 'Choose peace over constant victory in conflict.' },
    { title: 'Foundation in God', ref: 'Matthew 7:24-25', takeaway: "Relationships built on God’s word can weather any storm." }
  ];

  passages: (BiblePassage | null)[] = [];

  constructor(private bible: BibleService) {}

  ngOnInit(): void {
    const calls = this.entries.map(e => this.bible.getPassage(e.ref).pipe(catchError(() => of(null))));
    forkJoin(calls).subscribe(results => {
      this.passages = results;
      this.loading = false;
    }, () => this.loading = false);
  }
}
