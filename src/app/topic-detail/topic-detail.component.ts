import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BibleService } from '../services/bible.service';
import { forkJoin } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss']
})
export class TopicDetailComponent implements OnInit {
  topic = '';
  verses: any[] = [];
  loading = false;

  private mapping: Record<string, string[]> = {
    lust: [
      'Matthew 5:28',
      '1 Corinthians 6:18',
      'James 1:14-15',
      '1 Thessalonians 4:3-5',
      'Proverbs 6:25-26',
      'Galatians 5:16-17'
    ],
    money: [
      '1 Timothy 6:10',
      'Hebrews 13:5',
      'Matthew 6:24',
      'Luke 12:15',
      'Proverbs 22:7',
      'Matthew 6:19-21'
    ],
    anger: [
      'Ephesians 4:26-27',
      'James 1:19-20',
      'Proverbs 15:1',
      'Colossians 3:8',
      'Proverbs 29:11',
      'Ecclesiastes 7:9'
    ],
    anxiety: [
      'Philippians 4:6-7',
      '1 Peter 5:7',
      'Matthew 6:34',
      'Psalm 34:4',
      'Isaiah 41:10',
      'John 14:27'
    ]
  };

  constructor(private route: ActivatedRoute, private bible: BibleService, private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(pm => {
      const t = pm.get('topic') || '';
      this.topic = t;
      this.loadVerses(t);
    });
  }

  encode(s: string) {
    return encodeURIComponent(s);
  }

  private loadVerses(topicKey: string) {
    this.verses = [];
    const pool = this.mapping[topicKey] || [];
    if (pool.length === 0) { return; }
    // pick 4 random references
    const refs = this.shuffle(pool).slice(0, 4);
    this.loading = true;
    const calls = refs.map(r => this.bible.getPassage(r));
    forkJoin(calls).subscribe({ next: (results: any[]) => {
        this.verses = results.map(r => ({ ref: r.reference, text: r.text }));
        this.loading = false;
      }, error: () => { this.loading = false; }
    });
  }

  private shuffle<T>(arr: T[]): T[] {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  goBack() {
    this.location.back();
  }
}
