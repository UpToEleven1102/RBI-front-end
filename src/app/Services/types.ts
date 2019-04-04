export interface Conference {
  id: string;
  name: string;
  nick_name: string;
  founded: number;
  member_number: number;
}

export interface Team {
  id: string;
  name: string;
  university_name: string;
  team_img: string;
  conference: Conference;
}

export interface Stat {
  id: string;
  year: number;
  rush_yds: number;
  rush_attempt: number;
  rec_yds: number;
  catches: number;
  rush_td: number;
  rec_td: number;
  fumbles: number;
}

export interface Player {
  id: string;
  name: string;
  team: Team;
  player_img: string;
  class: string;
  ht_wt: string;
  home_town: string;
  dob: string;
  stats: Stat[];
  rbi: number;
}
