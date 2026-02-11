import { Component } from '@angular/core';

interface MensHelp {
  emotion: string;
  description?: string;
  icon: string;
  problems: string[];
  keywordVerses: string[];
  relevantVerses: any[];
}

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent {
  emotions: MensHelp[] = [
    {
      emotion: 'Anxiety',
      description: 'Feeling overwhelmed by worry, stress, or uncertainty about life and the future.',
      icon: 'alert-circle',
      problems: [
        'Worry about the future',
        'Work-related stress',
        'Health concerns',
        'Financial pressure',
        'Relationship uncertainty'
      ],
      keywordVerses: ['Philippians 4:6', '1 Peter 5:7', 'Matthew 6:34', 'Isaiah 41:10', 'Proverbs 3:5-6', 'Psalm 27:1', 'Deuteronomy 31:6'],
      relevantVerses: []
    },
    {
      emotion: 'Depression',
      description: 'Persistent low mood, loss of interest, or difficulties finding hope and energy.',
      icon: 'sad',
      problems: [
        'Loss of interest in activities',
        'Persistent sadness',
        'Low motivation',
        'Sleep problems',
        'Loneliness'
      ],
      keywordVerses: ['Psalm 23:4', 'John 11:35', '2 Corinthians 1:3', 'Proverbs 15:13', 'Romans 15:13', 'Psalm 30:5', 'Job 14:22', 'Hebrews 4:16'],
      relevantVerses: []
    },
    {
      emotion: 'Anger',
      description: 'Strong irritation or frustration that can lead to conflict or lost control.',
      icon: 'flame',
      problems: [
        'Losing patience at work',
        'Conflict with family',
        'Road rage and frustration',
        'Feeling disrespected',
        'Unable to control temper'
      ],
      keywordVerses: ['Ephesians 4:26', 'Proverbs 15:1', 'James 1:19', 'Proverbs 22:24', 'Proverbs 29:11', 'Colossians 3:8', 'Psalm 37:8', 'Proverbs 16:32'],
      relevantVerses: []
    },
    {
      emotion: 'Loneliness',
      description: 'Feeling disconnected from others or lacking meaningful relationships.',
      icon: 'person',
      problems: [
        'Difficulty making friends',
        'Social isolation',
        'Disconnection from peers',
        'Lack of meaningful relationships',
        'Missing family'
      ],
      keywordVerses: ['Hebrews 13:5', 'Matthew 28:20', 'Psalm 27:10', 'John 14:27', 'Proverbs 18:24', '1 Samuel 12:22', 'Joshua 1:5', 'Proverbs 13:12'],
      relevantVerses: []
    },
    {
      emotion: 'Struggling with Purpose',
      description: 'Questions about direction, calling, and what gives life meaning.',
      icon: 'compass',
      problems: [
        'Career confusion',
        'Lack of direction in life',
        'Feeling unfulfilled',
        'Struggling to find meaning',
        'Questioning life decisions'
      ],
      keywordVerses: ['Proverbs 19:23', 'Jeremiah 29:11', 'Colossians 3:17', 'Ecclesiastes 12:13', 'Psalm 37:4', 'Isaiah 48:17', 'Proverbs 16:9', 'Psalm 139:14'],
      relevantVerses: []
    },
    {
      emotion: 'Addiction Issues',
      description: 'Battles with harmful habits or dependencies that are hard to break.',
      icon: 'warning',
      problems: [
        'Substance abuse',
        'Pornography addiction',
        'Alcohol dependence',
        'Gaming addiction',
        'Struggle with breaking habits'
      ],
      keywordVerses: ['1 Corinthians 10:13', 'Romans 6:12', '2 Timothy 1:7', 'Philippians 4:13', 'Titus 2:11-12', 'Hebrews 12:1', '1 John 5:4', 'James 4:7'],
      relevantVerses: []
    },
    {
      emotion: 'Relationship Problems',
      description: 'Challenges in romantic or family relationships that cause pain and conflict.',
      icon: 'heart-half',
      problems: [
        'Marriage struggles',
        'Dating challenges',
        'Communication breakdown',
        'Trust issues',
        'Family conflict'
      ],
      keywordVerses: ['1 Corinthians 13:4', 'Ephesians 5:25', 'Proverbs 17:9', 'Proverbs 22:3', 'Matthew 22:37-39', 'Proverbs 27:12', 'Ephesians 4:2-3', 'Malachi 2:16'],
      relevantVerses: []
    },
    {
      emotion: 'Health & Fitness',
      description: 'Struggles with physical health, motivation, and maintaining healthy habits.',
      icon: 'fitness',
      problems: [
        'Motivation to exercise',
        'Weight management',
        'Sleep problems',
        'Energy levels',
        'Managing stress through health'
      ],
      keywordVerses: ['1 Corinthians 6:19', '3 John 1:2', 'Proverbs 12:27', '1 Timothy 4:8', 'Proverbs 23:12', 'Romans 12:1', 'Proverbs 14:30', '1 Thessalonians 5:23'],
      relevantVerses: []
    },
    {
      emotion: 'Shame & Guilt',
      description: 'Feeling weighed down by past mistakes and struggling to accept forgiveness.',
      icon: 'close-circle',
      problems: [
        'Past mistakes haunting you',
        'Feeling unworthy',
        'Struggling to forgive yourself',
        'Fear of judgment from others',
        'Shame about your past'
      ],
      keywordVerses: ['Romans 8:1', '1 John 1:9', 'Psalm 103:12', '2 Corinthians 5:17', 'Hebrews 10:17', 'Isaiah 43:25', 'Micah 7:19', 'Proverbs 28:13'],
      relevantVerses: []
    },
    {
      emotion: 'Grief & Loss',
      description: 'Processing deep sorrow after losing people, roles, or seasons of life.',
      icon: 'heart-dislike',
      problems: [
        'Death of a loved one',
        'Loss of a relationship',
        'Loss of identity or role',
        'Handling major life changes',
        'Feeling empty inside'
      ],
      keywordVerses: ['2 Corinthians 1:3-4', 'Matthew 5:4', 'John 11:25-26', 'Psalm 34:18', 'Revelation 21:4', 'Proverbs 14:13', 'Psalm 147:3', 'Lamentations 3:22-23'],
      relevantVerses: []
    },
    {
      emotion: 'Fear & Anxiety',
      description: 'Acute fear reactions or ongoing anxiety that disrupt daily life.',
      icon: 'alert',
      problems: [
        'Fear of failure',
        'Panic attacks',
        'Fear of the unknown',
        'Dread about the future',
        'Irrational fears'
      ],
      keywordVerses: ['2 Timothy 1:7', 'Joshua 1:9', 'Proverbs 29:25', 'Isaiah 41:13', 'Psalm 56:3', 'Hebrews 13:6', 'Psalm 91:4', '1 John 4:18'],
      relevantVerses: []
    },
    {
      emotion: 'Envy & Jealousy',
      description: 'Comparing yourself to others and feeling resentful or discontent.',
      icon: 'eye',
      problems: [
        'Comparing yourself to others',
        'Resentment of others\' success',
        'Wanting what others have',
        'Bitterness toward peers',
        'Struggling with contentment'
      ],
      keywordVerses: ['Proverbs 14:30', '1 Peter 2:1', 'Galatians 5:26', 'Psalm 37:1', 'Hebrews 13:5', 'Philippians 4:11', 'Proverbs 23:17', 'Proverbs 27:4'],
      relevantVerses: []
    },
    {
      emotion: 'Work & Stress',
      description: 'Burnout, pressure, and struggles balancing work with the rest of life.',
      icon: 'briefcase',
      problems: [
        'Overwork and burnout',
        'Difficult boss or coworkers',
        'Job insecurity',
        'Struggling with work-life balance',
        'Pressure to provide'
      ],
      keywordVerses: ['Matthew 11:28', 'Ecclesiastes 4:6', 'Colossians 3:23', 'Proverbs 22:29', '1 Corinthians 15:58', 'Psalm 127:1', 'Proverbs 13:4', 'Nehemiah 8:10'],
      relevantVerses: []
    },
    {
      emotion: 'Self-Esteem & Identity',
      description: 'Questions about self-worth, identity, and personal value.',
      icon: 'person-circle',
      problems: [
        'Feeling inadequate',
        'Not knowing who you are',
        'Struggling with masculine identity',
        'Low self-worth',
        'Comparison and inferiority'
      ],
      keywordVerses: ['Psalm 139:14', 'Proverbs 31:25', 'Jeremiah 1:5', 'Romans 12:3', 'Ephesians 2:10', 'Psalm 27:4', '1 Peter 3:3-4', '1 Corinthians 12:27'],
      relevantVerses: []
    },
    {
      emotion: 'Doubt & Faith Struggles',
      description: 'Periods of questioning belief, purpose, or the nature of God.',
      icon: 'help-circle',
      problems: [
        'Questioning your faith',
        'Struggling to believe',
        'Why does God allow suffering',
        'Feeling distant from God',
        'Doubting your purpose'
      ],
      keywordVerses: ['Mark 9:24', 'Hebrews 11:1', 'Proverbs 3:5', 'Romans 10:17', 'James 1:6', 'Psalm 42:5', '1 Peter 1:7', 'John 20:29'],
      relevantVerses: []
    },
    {
      emotion: 'Lust & Purity',
      description: 'Struggles with sexual temptation, boundaries, and maintaining purity.',
      icon: 'eye-off',
      problems: [
        'Lustful thoughts and temptation',
        'Struggling with sexual purity',
        'Objectifying women',
        'Fantasy and imagination',
        'Maintaining sexual integrity'
      ],
      keywordVerses: ['1 Thessalonians 4:3', 'Matthew 5:28', 'Colossians 3:5', '2 Timothy 2:22', 'Proverbs 6:25', 'Romans 13:14', 'James 1:14-15', 'Proverbs 4:23'],
      relevantVerses: []
    },
    {
      emotion: 'Pride & Humility',
      description: 'Battles with arrogance, control, and learning humility.',
      icon: 'star',
      problems: [
        'Pride and arrogance',
        'Inability to admit mistakes',
        'Stubborn and unwilling to listen',
        'Need for control and recognition',
        'Looking down on others'
      ],
      keywordVerses: ['Proverbs 16:18', 'Proverbs 11:2', '1 Peter 5:5', 'Philippians 2:3', 'James 4:6', 'Proverbs 13:10', 'Colossians 3:12', 'Proverbs 29:23'],
      relevantVerses: []
    },
    {
      emotion: 'Financial Stress',
      description: 'Worries about money, debt, and providing for yourself or family.',
      icon: 'wallet',
      problems: [
        'Debt and financial burden',
        'Struggling to provide for family',
        'Fear about money and future',
        'Overspending and lack of discipline',
        'Fear of poverty'
      ],
      keywordVerses: ['Proverbs 22:7', 'Matthew 6:11', '1 Timothy 6:10', 'Proverbs 21:5', 'Malachi 3:10', 'Proverbs 10:22', 'Philippians 4:19', 'Proverbs 22:1'],
      relevantVerses: []
    }
  ];

  routeFor(emotion: string) {
    return emotion.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
}
