export interface SchoolData {
  uuid: string;
  is_federal: boolean;
  updated_at: string;
  edu_org: {
    full_name: string;
    short_name: string;
    contact_info: {
      post_address: string;
    };
    region: {
      name: string;
    };
  };
  supplements: [
    {
      educational_programs: [
        {
          uuid: string;
          edu_level: { name: string };
        },
      ];
    },
  ];
}
