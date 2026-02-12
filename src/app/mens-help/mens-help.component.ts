import { Component, OnDestroy, OnInit } from '@angular/core';
import { BibleService } from '../services/bible.service';
import { NavigationService } from '../services/navigation.service';
import { BibleVersionService } from '../services/bible-version.service';
import { from, of, Subject } from 'rxjs';
import { concatMap, toArray, map, catchError, takeUntil } from 'rxjs/operators';

interface MensHelp {
  emotion: string;
  description?: string;
  problems: string[];
  icon: string;
  keywordVerses: string[];
  relevantVerses: Array<{ reference: string; text: string }>;
}

@Component({
  selector: 'app-mens-help',
  templateUrl: './mens-help.component.html',
  styleUrls: ['./mens-help.component.scss'],
})
export class MensHelpComponent implements OnInit, OnDestroy {
  selectedEmotion: string | null = null;
  selectedEmotionData: MensHelp | null = null;
  showingVerses = false;
  loadingVerses = false;
  selectedVersion = 'KJV';

  private destroy$ = new Subject<void>();

  versions = ['KJV', 'NIV', 'ESV', 'NLT', 'NKJV'];

  emotions: MensHelp[] = [
    {
      emotion: 'Anger',
      description:
        'Anger in men often masks hurt, disrespect, or loss of control. Scripture teaches that strength is not explosive reaction but disciplined restraint. God calls men to righteous anger without sin, leading with patience, humility, and wisdom.',
      icon: 'fire',
      problems: [
        'Short temper',
        'Feeling disrespected',
        'Road rage',
        'Explosive reactions',
        'Holding grudges',
      ],
      keywordVerses: [
        'Ephesians 4:26-27',
        'James 1:19-20',
        'Proverbs 16:32',
        'Proverbs 14:29',
        'Ecclesiastes 7:9',
        'Psalm 37:8',
        'Proverbs 15:1',
        'Colossians 3:8',
        'Matthew 5:22',
        'Romans 12:19',
        'Proverbs 19:11',
        'Galatians 5:22-23',
        'Proverbs 29:11',
        'Psalm 4:4',
        '1 Peter 2:23',
        'Proverbs 20:3',
        'Matthew 5:9',
        'Romans 12:21',
        'Proverbs 22:24-25',
        'Colossians 3:12-13',
      ],
      relevantVerses: [],
    },

    {
      emotion: 'Lust',
      description:
        'Men are bombarded daily with sexual imagery and temptation. Scripture calls men to self-control, honor, and purity of heart. Real strength is mastering desire, not being mastered by it.',
      icon: 'eye-invisible',
      problems: [
        'Pornography',
        'Lustful thoughts',
        'Objectifying women',
        'Secret habits',
        'Sexual shame',
      ],
      keywordVerses: [
        'Matthew 5:28',
        '1 Thessalonians 4:3-5',
        'Job 31:1',
        '1 Corinthians 6:18-20',
        'Proverbs 4:23',
        '2 Timothy 2:22',
        'Psalm 119:9-11',
        'James 1:14-15',
        'Galatians 5:16',
        'Colossians 3:5',
        'Romans 13:14',
        'Hebrews 13:4',
        'Psalm 51:10',
        'Titus 2:11-12',
        'Proverbs 6:25',
        '1 Corinthians 10:13',
        '2 Corinthians 10:5',
        'Ephesians 5:3',
        '1 Peter 2:11',
        'Galatians 5:22-23',
      ],
      relevantVerses: [],
    },

    {
      emotion: 'Leadership Pressure',
      description:
        'Men often feel the weight of leading a family, team, or ministry. Leadership can feel isolating and heavy. Scripture reminds men that leadership is servanthood, courage, and dependence on God.',
      icon: 'compass',
      problems: [
        'Pressure to provide',
        'Decision fatigue',
        'Fear of failing others',
        'Carrying responsibility alone',
        'Work-family tension',
      ],
      keywordVerses: [
        'Joshua 1:9',
        '1 Corinthians 16:13',
        'Luke 12:48',
        'James 3:1',
        'Matthew 20:26',
        'Mark 10:45',
        'Psalm 78:72',
        'Nehemiah 2:18',
        'Proverbs 11:14',
        'Exodus 18:21',
        '1 Peter 5:2-3',
        '2 Timothy 2:2',
        'Titus 1:7',
        'Hebrews 13:7',
        'Proverbs 27:23',
        'Philippians 2:4',
        'Colossians 4:17',
        '1 Timothy 3:1',
        'Proverbs 16:9',
        'Ecclesiastes 4:9-10',
      ],
      relevantVerses: [],
    },

    {
      emotion: 'Fatherhood Stress',
      description:
        'Fatherhood brings joy and deep responsibility. Many men wrestle with guilt, fear, and inadequacy as dads. Scripture calls fathers to lead with love, patience, and consistent presence.',
      icon: 'user',
      problems: [
        'Fear of failing your kids',
        'Discipline tension',
        'Not feeling respected',
        'Balancing work and family',
        'Regret over parenting mistakes',
      ],
      keywordVerses: [
        'Ephesians 6:4',
        'Proverbs 22:6',
        'Psalm 127:3-5',
        'Colossians 3:21',
        'Deuteronomy 6:6-7',
        'Joshua 24:15',
        'Psalm 103:13',
        'Proverbs 20:7',
        'Hebrews 12:11',
        'James 1:5',
        '1 Corinthians 13:4-7',
        'Micah 6:8',
        'Proverbs 3:5-6',
        'Psalm 78:4',
        'Proverbs 13:24',
        'Psalm 112:1-2',
        'Malachi 4:6',
        'Luke 11:11-13',
        '2 Timothy 1:5',
        'Proverbs 4:1-4',
      ],
      relevantVerses: [],
    },

    {
      emotion: 'Identity & Masculinity',
      description:
        'Many men struggle with what it truly means to be a man. Culture sends mixed signals. Scripture roots identity in being made in God’s image — strong, humble, self-controlled, and sacrificial.',
      icon: 'star',
      problems: [
        'Feeling inadequate',
        'Comparing yourself to other men',
        'Questioning masculinity',
        'Low confidence',
        'Confusion about role',
      ],
      keywordVerses: [
        'Genesis 1:27',
        '1 Corinthians 16:13',
        'Micah 6:8',
        'Ephesians 2:10',
        '2 Corinthians 5:17',
        '1 Peter 2:9',
        'Romans 8:15',
        'Psalm 139:14',
        'Colossians 3:3',
        'Galatians 2:20',
        'Proverbs 27:17',
        'Joshua 1:9',
        'Philippians 4:13',
        '1 John 3:1',
        'Romans 12:2',
        'Jeremiah 1:5',
        'Isaiah 43:1',
        'Hebrews 10:14',
        '1 Corinthians 6:11',
        'Psalm 100:3',
      ],
      relevantVerses: [],
    },
    {
      emotion: 'Anxiety',
      description:
        'Anxiety in men often hides beneath responsibility and silent pressure. Scripture calls men to cast their burdens on the Lord, trusting that God carries what they cannot control.',
      icon: 'exclamation-circle',
      problems: [
        'Financial pressure',
        'Health worries',
        'Future uncertainty',
        'Work stress',
        'Family concerns',
      ],
      keywordVerses: [
        'Philippians 4:6-7',
        '1 Peter 5:7',
        'Matthew 6:25-34',
        'Isaiah 41:10',
        'Psalm 56:3',
        'John 14:27',
        'Joshua 1:9',
        'Romans 8:15',
        'Psalm 94:19',
        'Isaiah 26:3',
        'Psalm 23:4',
        'Psalm 27:1',
        '2 Timothy 1:7',
        'Psalm 46:1',
        'Proverbs 3:5-6',
        'Psalm 34:4',
        'John 16:33',
        'Romans 15:13',
        'Psalm 121:1-2',
        'Hebrews 13:6',
      ],
      relevantVerses: [],
    },

    {
      emotion: 'Depression',
      description:
        'Depression is not weakness. Even strong men in Scripture wrestled with despair. God meets men in the dark and restores strength one day at a time.',
      icon: 'frown',
      problems: [
        'Loss of motivation',
        'Emotional numbness',
        'Isolation',
        'Persistent sadness',
        'Loss of joy',
      ],
      keywordVerses: [
        'Psalm 42:11',
        'Psalm 34:18',
        'Lamentations 3:22-23',
        'Isaiah 40:29-31',
        '2 Corinthians 4:8-9',
        'Romans 8:38-39',
        'Psalm 147:3',
        'John 16:33',
        'Psalm 30:5',
        'Micah 7:8',
        '2 Corinthians 1:3-4',
        'Psalm 40:1-3',
        'Isaiah 57:15',
        'Matthew 11:28-30',
        'Psalm 6:6-9',
        'Psalm 13:1-2',
        'Psalm 73:26',
        'Romans 15:13',
        'Zephaniah 3:17',
        'Hebrews 6:19',
      ],
      relevantVerses: [],
    },

    {
      emotion: 'Shame & Guilt',
      description:
        'Many men carry private regret. Scripture declares forgiveness, cleansing, and new identity in Christ for those who repent.',
      icon: 'close-circle',
      problems: [
        'Past mistakes',
        'Sexual shame',
        'Hidden regret',
        'Fear of exposure',
        'Feeling unworthy',
      ],
      keywordVerses: [
        'Romans 8:1',
        '1 John 1:9',
        'Psalm 32:1-5',
        'Psalm 103:12',
        'Isaiah 1:18',
        'Micah 7:19',
        'Hebrews 8:12',
        'Colossians 2:13-14',
        '2 Corinthians 5:17',
        'Acts 3:19',
        'Psalm 51:10',
        'Ephesians 1:7',
        'Titus 3:5',
        'Hebrews 4:16',
        'Psalm 130:3-4',
        'Isaiah 43:25',
        'Romans 5:1',
        'John 8:11',
        'Hebrews 10:17',
        'Psalm 86:5',
      ],
      relevantVerses: [],
    },

    {
      emotion: 'Addiction',
      description:
        'Addiction enslaves desire and isolates men in secrecy. Scripture promises freedom, accountability, and power through the Spirit.',
      icon: 'lock',
      problems: [
        'Porn addiction',
        'Alcohol dependence',
        'Substance abuse',
        'Compulsive behavior',
        'Escapism',
      ],
      keywordVerses: [
        'John 8:36',
        '1 Corinthians 10:13',
        'Romans 6:14',
        'Galatians 5:1',
        'Romans 8:1',
        'Galatians 5:16',
        '1 Corinthians 6:12',
        'James 5:16',
        '2 Timothy 2:22',
        'Titus 2:11-12',
        'Psalm 107:13-14',
        'Romans 6:6',
        'Colossians 3:5',
        'Ephesians 5:18',
        'Hebrews 12:1',
        'Psalm 119:9',
        '2 Corinthians 5:17',
        '1 Peter 5:8',
        'Proverbs 28:13',
        'Galatians 5:22-23',
      ],
      relevantVerses: [],
    },

    {
      emotion: 'Financial Stress',
      description:
        'Men often feel deep pressure to provide. Scripture calls for faithful stewardship, contentment, and trust in God as provider.',
      icon: 'wallet',
      problems: [
        'Debt',
        'Job instability',
        'Providing for family',
        'Fear of poverty',
        'Overspending',
      ],
      keywordVerses: [
        'Matthew 6:31-33',
        'Philippians 4:19',
        'Proverbs 22:7',
        'Hebrews 13:5',
        '1 Timothy 6:6-10',
        'Luke 16:10',
        'Proverbs 3:9-10',
        'Psalm 37:25',
        'Deuteronomy 8:18',
        'Proverbs 21:5',
        'Ecclesiastes 5:10',
        'Acts 20:35',
        'Proverbs 10:22',
        '2 Corinthians 9:6-8',
        'Luke 12:15',
        'Malachi 3:10',
        'Psalm 112:5',
        'Proverbs 22:1',
        'Matthew 6:19-21',
        'Colossians 3:23',
      ],
      relevantVerses: [],
    },

    {
      emotion: 'Fear of Failure',
      description:
        'Many men quietly fear not measuring up. Scripture reminds men that identity is not performance but faithfulness.',
      icon: 'warning',
      problems: [
        'Career fear',
        'Fear of letting family down',
        'Comparison',
        'Risk avoidance',
        'Performance pressure',
      ],
      keywordVerses: [
        'Isaiah 41:10',
        '2 Timothy 1:7',
        'Romans 8:31',
        'Joshua 1:9',
        'Psalm 118:6',
        'Proverbs 29:25',
        'Philippians 4:13',
        '1 Corinthians 15:58',
        'James 1:12',
        '2 Corinthians 12:9',
        'Mark 5:36',
        '1 John 4:18',
        'Psalm 27:1',
        'Romans 15:13',
        'Isaiah 40:31',
        'Hebrews 13:6',
        'Micah 7:8',
        'Psalm 56:3',
        'Deuteronomy 31:6',
        'John 14:27',
      ],
      relevantVerses: [],
    },

    {
      emotion: 'Work Burnout',
      description:
        'Men often tie worth to productivity. Scripture commands rest, Sabbath rhythm, and reliance on God over endless striving.',
      icon: 'exclamation',
      problems: [
        'Overworking',
        'Exhaustion',
        'Irritability',
        'Neglecting family',
        'Loss of joy',
      ],
      keywordVerses: [
        'Matthew 11:28',
        'Psalm 127:2',
        'Mark 6:31',
        'Isaiah 40:29',
        'Ecclesiastes 4:6',
        'Hebrews 4:9-10',
        'Psalm 46:10',
        'Colossians 3:23',
        'Proverbs 16:3',
        'Jeremiah 31:25',
        'Isaiah 26:3',
        'Philippians 4:6-7',
        'Psalm 23:2-3',
        'Exodus 33:14',
        'Romans 8:28',
        'Galatians 6:9',
        'James 1:5',
        'Psalm 90:17',
        '1 Corinthians 10:31',
        '2 Thessalonians 3:13',
      ],
      relevantVerses: [],
    },

    {
      emotion: 'Loneliness',
      description:
        'Men often suffer in silence, believing they must handle everything alone. Scripture calls men into brotherhood and reminds them they are never abandoned.',
      icon: 'eye',
      problems: [
        'Isolation',
        'No close friendships',
        'Emotional withdrawal',
        'Lack of accountability',
        'Feeling unseen',
      ],
      keywordVerses: [
        'Genesis 2:18',
        'Ecclesiastes 4:9-10',
        'Proverbs 27:17',
        'Hebrews 10:24-25',
        'Psalm 68:6',
        'John 15:15',
        'Romans 12:10',
        '1 Samuel 18:1',
        'Colossians 3:14',
        'Proverbs 18:24',
        'Isaiah 41:10',
        'Matthew 28:20',
        'Psalm 25:16',
        '2 Timothy 4:16-17',
        'John 14:18',
        'Acts 2:44',
        'Philippians 1:3-5',
        '1 Peter 4:8',
        'Psalm 23:4',
        '3 John 1:2',
      ],
      relevantVerses: [],
    },

    {
      emotion: 'Grief & Loss',
      description:
        'Men are often taught not to cry. Scripture shows that grief is human and that hope exists beyond loss.',
      icon: 'heart',
      problems: [
        'Loss of loved one',
        'Divorce',
        'Job loss',
        'Lost dreams',
        'Emotional shutdown',
      ],
      keywordVerses: [
        'Psalm 34:18',
        'Psalm 147:3',
        'Matthew 5:4',
        'John 11:25-26',
        'Revelation 21:4',
        'Romans 8:18',
        '2 Corinthians 1:3-4',
        'Isaiah 61:3',
        'Psalm 30:5',
        'Lamentations 3:22-23',
        'Psalm 23:4',
        'Romans 8:38-39',
        'Hebrews 6:19',
        '1 Thessalonians 4:13-14',
        'Psalm 126:5',
        '2 Corinthians 4:16-18',
        'Isaiah 25:8',
        'Ecclesiastes 3:1-4',
        '1 Peter 5:10',
        'Psalm 116:15',
      ],
      relevantVerses: [],
    },

    {
      emotion: 'Spiritual Doubt',
      description:
        'Men wrestle with questions about God, suffering, and faith. Scripture welcomes honest doubt and strengthens belief.',
      icon: 'question-circle',
      problems: [
        'Questioning faith',
        'Feeling distant from God',
        'Struggling to trust',
        'Intellectual doubts',
        'Spiritual dryness',
      ],
      keywordVerses: [
        'Mark 9:24',
        'James 1:5',
        'Hebrews 11:1',
        'Romans 10:17',
        'Jeremiah 33:3',
        'Matthew 14:31',
        'John 20:29',
        '2 Corinthians 5:7',
        '1 Peter 1:7',
        'Psalm 73:21-26',
        'Isaiah 55:8-9',
        'Lamentations 3:25',
        'Jude 1:22',
        'Luke 24:38',
        '1 Corinthians 13:12',
        'Romans 8:28',
        'Hebrews 4:16',
        'Psalm 119:105',
        'Psalm 42:5',
        'Proverbs 3:5-6',
      ],
      relevantVerses: [],
    },
  ];

  constructor(
    private bibleApiService: BibleService,
    private bibleVersionService: BibleVersionService,
    private navSvc: NavigationService,
  ) {}

  ngOnInit(): void {
    this.bibleVersionService.selectedVersion$
      .pipe(takeUntil(this.destroy$))
      .subscribe((v) => {
        this.selectedVersion = v;
        if (this.showingVerses && this.selectedEmotionData) {
          this.findRelevantVerses();
        }
      });

    // Reset view when header triggers a reset (e.g., home/title click)
    this.navSvc.reset$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.deselectEmotion();
    });

    this.selectedVersion = this.bibleVersionService.getSelectedVersion();
  }

  changeVersion(v: string) {
    this.bibleVersionService.setSelectedVersion(v);
    this.selectedVersion = v;
    // if verses are displayed, refresh them in the new version
    if (this.showingVerses && this.selectedEmotionData) {
      this.findRelevantVerses();
    }
  }

  selectEmotion(emotion: string) {
    this.selectedEmotion = emotion;
    this.selectedEmotionData =
      this.emotions.find((e) => e.emotion === emotion) || null;
    this.showingVerses = false;
    this.navSvc.setBackVisible(true);
  }

  deselectEmotion() {
    this.selectedEmotion = null;
    this.selectedEmotionData = null;
    this.showingVerses = false;
    this.navSvc.setBackVisible(false);
  }

  findRelevantVerses() {
    if (!this.selectedEmotionData) return;

    this.loadingVerses = true;
    this.showingVerses = true;

    const selected = this.getRandomVerses(
      this.selectedEmotionData.keywordVerses,
      4,
    );

    from(selected)
      .pipe(
        concatMap((ref) =>
          this.bibleApiService.getPassage(ref).pipe(
            map((r) => ({ ref, text: r.text || 'Text unavailable' })),
            catchError(() => of({ ref, text: 'Unable to load verse text.' })),
          ),
        ),
        toArray(),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (results) => {
          this.selectedEmotionData!.relevantVerses = results.map((r) => ({
            reference: `${r.ref} (${this.selectedVersion})`,
            text: r.text,
          }));
          this.loadingVerses = false;
        },
        error: (err) => {
          console.error(err);
          this.selectedEmotionData!.relevantVerses = selected.map((s) => ({
            reference: `${s} (${this.selectedVersion})`,
            text: 'Unable to load verse text.',
          }));
          this.loadingVerses = false;
        },
      });
  }

  private getRandomVerses(verses: string[], count: number): string[] {
    const shuffled = [...verses].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  backToProblems() {
    this.showingVerses = false;
    if (this.selectedEmotionData) this.selectedEmotionData.relevantVerses = [];
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
