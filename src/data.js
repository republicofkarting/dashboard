export let data = [
  [
    "Indore",
    {
      showDataPerLaps: {
        tyres: true,
        spares: false,
        salaries: true,
        marketing: false,
        other: false,
      },
      expenses: {
        months: [
          "April21",
          "May21",
          "June21",
          "July21",
          "Aug21",
          "Sept21",
          "Oct21",
          "Nov21",
          "Dec21",
          "Jan22",
          "Feb22",
        ],
        tyres: [0, 0, 0, 0, 29060, 29532, 22737, 25705, 25062, 20504, 0],
        spares: [0, 0, 0, 0, 26600, 79260, 22982, 35035, 19582, 2626, 0],
        salaries: [0, 0, 0, 0, 80704, 88115, 106689, 84357, 93351, 97004, 0],
        marketing: [0, 0, 0, 0, 0, 6000, 0, 0, 0, 0, 0],
        other: [0, 0, 0, 0, 10011, 27529, 23929, 66225, 9866, 7110, 0],
      },
      footfall: [
        [
          "April21",
          {
            date: [1, 2, 3, 4, 5, 6, 7],
            days: ["Thurs", "Fri", "Sat", "Sun", "Mon", "Tues", "Wed"],
            offer1: [9, 29, 48, 4, 11, 5, 5],
            offer2: [0, 0, 0, 0, 0, 0, 0],
            "Gold(weekday)": [58, 0, 0, 0, 6, 40, 10],
            complementary: [0, 0, 0, 0, 0, 0, 0],
            "Gold(weekend)": [0, 11, 15, 5, 0, 0, 0],
            offerToNumber: {
              offer1: 2,
              offer2: 5,
              "Gold(weekday)": 2,
              complementary: 1,
              "Gold(weekend)": 2,
            },
          },
        ],
        [
          "May21",
          {
            date: [1, 2, 3, 4, 5, 6, 7],
            days: ["Thurs", "Fri", "Sat", "Sun", "Mon", "Tues", "Wed"],
            offer1: [0, 0, 0, 0, 0, 0, 0],
            offerToNumber: {
              offer1: 2,
            },
          },
        ],
        [
          "June21",
          {
            date: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            days: [
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
            ],
            offer1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            offer2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            Gold_weekend: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            complimentary: [7, 38, 56, 26, 16, 155, 171, 69, 55, 127],
            "Gold(weekday)": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

            offerToNumber: {
              offer1: 2,
              offer2: 5,
              complimentary: 1,
              Gold_weekend: 2,
              "Gold(weekday)": 2,
            },
          },
        ],
        [
          "July21",
          {
            date: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
            ],
            days: [
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
            ],
            offer1: [
              45, 26, 138, 188, 48, 50, 58, 56, 44, 175, 232, 62, 51, 37, 67,
              57, 174, 246, 73, 110, 86, 75, 44, 151, 161, 56, 67, 92, 34, 69,
              176,
            ],
            offer2: [
              0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 8, 0, 0, 0, 0, 0, 1, 6, 0, 0,
              0, 1, 0, 0, 2, 0, 0, 0, 0,
            ],
            orange: [
              0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
            offerToNumber: {
              offer1: 3,
              offer2: 6,
              orange: 1,
            },
          },
        ],
        [
          "Aug21",
          {
            date: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
            ],
            days: [
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
            ],
            offer1: [
              258, 69, 106, 68, 42, 65, 182, 189, 55, 76, 56, 58, 50, 218, 244,
              48, 58, 57, 38, 87, 100, 120, 132, 85, 78, 93, 75, 232, 287, 91,
              86,
            ],
            offer2: [
              0, 0, 2, 6, 19, 28, 0, 0, 39, 8, 10, 8, 19, 0, 0, 12, 0, 0, 14,
              19, 8, 0, 0, 0, 1, 7, 0, 3, 0, 5, 0,
            ],
            orange: [
              20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
            offerToNumber: {
              offer1: 3,
              offer2: 6,
              orange: 1,
            },
          },
        ],
        [
          "Sep21",
          {
            date: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            ],
            days: [
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
            ],
            offer1: [
              65, 53, 35, 89, 196, 65, 52, 52, 47, 44, 146, 172, 59, 60, 68, 20,
              69, 54, 139, 57, 47, 19, 16, 6, 79, 144, 34, 50, 23, 43,
            ],
            offer2: [
              6, 0, 5, 3, 7, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 15, 1, 0, 0, 0, 0,
              1, 0, 0, 0, 0, 2, 7, 9,
            ],
            orange: [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            "Free Lap": [
              0, 0, 0, 1, 2, 0, 4, 0, 0, 4, 2, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            offerToNumber: {
              offer1: 3,
              offer2: 6,
              orange: 1,
              "Free Lap": 0,
            },
          },
        ],
        [
          "Oct21",
          {
            offer1: [
              48, 199, 170, 33, 21, 27, 50, 38, 65, 156, 31, 9, 36, 60, 77, 122,
              104, 38, 114, 13, 27, 23, 72, 63, 28, 14, 15, 22, 9, 67, 84,
            ],
            offer2: [
              0, 0, 0, 0, 0, 3, 8, 0, 34, 0, 1, 18, 0, 0, 0, 29, 2, 6, 18, 0, 6,
              3, 15, 4, 0, 5, 0, 4, 0, 7, 14,
            ],
            date: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
            ],
            days: [
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
            ],
            complimentary: [
              0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 3,
              8, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
            offerToNumber: {
              offer1: 3,
              offer2: 6,
              complimentary: 0,
            },
          },
        ],
        [
          "Nov21",
          {
            offer1: [
              14, 7, 13, 32, 140, 200, 180, 69, 33, 20, 21, 12, 127, 145, 40,
              25, 7, 26, 55, 43, 128, 30, 18, 24, 27, 19, 92, 75, 31, 20,
            ],
            offer2: [
              0, 0, 0, 0, 5, 0, 0, 1, 6, 0, 0, 1, 0, 0, 8, 5, 0, 0, 4, 0, 0, 5,
              0, 3, 0, 3, 6, 0, 6, 4,
            ],
            Silver: [
              2, 4, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0,
              0, 0, 0, 0, 0, 5, 0, 0,
            ],
            Duo: [
              0, 0, 0, 0, 0, 0, 54, 15, 25, 13, 6, 11, 25, 42, 9, 7, 6, 11, 6,
              17, 35, 2, 5, 9, 2, 15, 21, 44, 8, 16,
            ],
            date: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            ],
            days: [
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
            ],

            offerToNumber: {
              offer1: 3,
              offer2: 6,
              Duo: 3,
              Silver: 2,
            },
          },
        ],
        [
          "Dec21",
          {
            offer1: [
              30, 0, 8, 90, 84, 30, 31, 24, 9, 24, 96, 158, 46, 32, 66, 49, 78,
              164, 138, 71, 64, 39, 73, 66, 237, 218, 115, 88, 101, 163, 140,
            ],
            offer2: [
              2, 0, 2, 5, 0, 0, 9, 0, 0, 6, 2, 0, 2, 0, 0, 24, 0, 3, 0, 14, 5,
              2, 2, 0, 0, 5, 0, 2, 8, 11, 6,
            ],

            Silver: [
              0, 0, 0, 0, 0, 0, 6, 9, 0, 0, 0, 0, 4, 0, 0, 0, 0, 8, 0, 0, 0, 0,
              0, 2, 0, 0, 0, 0, 0, 0, 0,
            ],
            Duo: [
              4, 0, 10, 30, 64, 3, 9, 13, 11, 11, 46, 68, 21, 16, 14, 24, 20,
              28, 38, 13, 12, 7, 20, 21, 42, 25, 27, 30, 21, 30, 22,
            ],
            Premium: [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              4, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
            date: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
            ],
            days: [
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
            ],

            offerToNumber: {
              offer1: 3,
              offer2: 6,
              Premium: 2,
              Duo: 3,
              Silver: 2,
            },
          },
        ],
        [
          "Jan22",
          {
            offer1: [
              212, 202, 58, 53, 100, 32, 16, 56, 117, 31, 20, 20, 25, 12, 54,
              78, 26, 31, 31, 13, 21, 19, 68, 36, 34, 115, 31, 19, 70, 159, 42,
            ],
            offer2: [
              19, 2, 1, 0, 0, 3, 0, 1, 0, 9, 0, 4, 5, 1, 1, 2, 0, 0, 0, 0, 6,
              10, 8, 0, 0, 4, 0, 0, 2, 3, 3,
            ],
            Silver: [
              12, 0, 0, 0, 4, 0, 0, 3, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
              0, 5, 0, 0, 2, 0, 0, 3, 0, 0,
            ],
            Duo: [
              51, 77, 19, 23, 16, 11, 9, 22, 46, 5, 11, 6, 7, 10, 12, 48, 19,
              10, 11, 1, 6, 6, 42, 9, 9, 55, 14, 8, 12, 43, 17,
            ],
            Premium: [
              0, 0, 3, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 5, 0, 0, 0, 0, 0, 6,
              8, 2, 0, 4, 0, 0, 0, 0, 4,
            ],
            days: [
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
            ],
            date: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
            ],
            offerToNumber: {
              offer1: 3,
              offer2: 6,
              Premium: 2,
              Duo: 3,
              Silver: 2,
            },
          },
        ],
        [
          "Feb22",
          {
            offer1: [
              52, 12, 34, 25, 41, 166, 30, 16, 13, 32, 52, 84, 150, 49, 22, 29,
              33, 39, 93, 110, 46, 17, 6, 4, 37, 87, 150, 19,
            ],
            offer2: [
              0, 1, 0, 3, 5, 1, 0, 0, 0, 2, 0, 2, 5, 6, 0, 3, 5, 0, 8, 2, 0, 0,
              0, 0, 0, 15, 5, 0,
            ],
            Silver: [
              0, 0, 0, 0, 0, 5, 0, 10, 12, 0, 0, 18, 5, 0, 0, 0, 0, 0, 0, 4, 4,
              0, 0, 0, 0, 0, 0, 0,
            ],
            Duo: [
              6, 11, 6, 10, 21, 53, 21, 18, 8, 9, 22, 54, 68, 39, 10, 22, 9, 5,
              33, 60, 9, 4, 8, 6, 6, 38, 51, 1,
            ],
            Premium: [
              0, 0, 0, 0, 2, 21, 0, 0, 0, 0, 0, 0, 6, 0, 16, 0, 0, 0, 2, 6, 0,
              0, 0, 0, 6, 4, 2, 0,
            ],
            days: [
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
            ],
            date: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28,
            ],
            offerToNumber: {
              offer1: 3,
              offer2: 6,
              Premium: 2,
              Duo: 3,
              Silver: 0,
            },
          },
        ],
      ],
    },
  ],
  [
    "Pune",
    {
      showDataPerLaps: {
        tyres: true,
        spares: false,
        salaries: true,
        marketing: false,
        other: false,
      },
      expenses: {
        months: [
          "April21",
          "May21",
          "June21",
          "July21",
          "Aug21",
          "Sept21",
          "Oct21",
          "Nov21",
          "Dec21",
          "Jan22",
          "Feb22",
        ],
        tyres: [0, 0, 0, 0, 27833, 42783, 42710, 27722, 18138, 19816, 0],
        spares: [0, 0, 0, 0, 15177, 20707, 8211, 28560, 30403, 5780, 0],
        salaries: [0, 0, 0, 0, 27833, 35962, 27933, 39576, 45409, 50207, 0],
        marketing: [0, 0, 0, 0, 0, 6000, 0, 0, 0, 0, 0],
        other: [0, 0, 0, 0, 20776, 33326, 22101, 22056, 28628, 18280, 0],
      },
      footfall: [
        [
          "April21",
          {
            offer1: [0, 0],
            offer2: [0, 0],
            offer3: [6, 6],
            offer4: [0, 0],
            offer5: [0, 11],
            days: ["Thurs", "Fri"],
            date: [1, 2],
            offerToNumber: {
              offer1: 7,
              offer2: 14,
              offer3: 7,
              offer4: 7,
              offer5: 7,
            },
          },
        ],
        [
          "May21",
          {
            offer1: [0, 0],
            offer2: [0, 0],
            days: ["Thurs", "Fri"],
            date: [1, 2],
            offerToNumber: {
              offer1: 7,
              offer2: 14,
            },
          },
        ],
        [
          "June21",
          {
            offer1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            offer2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            offer3: [17, 16, 8, 8, 6, 0, 0, 0, 0, 0],
            offer4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            offer5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            days: [
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
            ],
            date: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            offerToNumber: {
              offer1: 7,
              offer2: 14,
              offer3: 7,
              offer4: 7,
              offer5: 7,
            },
          },
        ],
        [
          "July21",
          {
            offer1: [5, 4, 0, 4, 0, 4],
            offer2: [16, 11, 7, 7, 10, 27],
            offer3: [8, 0, 0, 0, 0, 13],
            offer4: [0, 0, 0, 0, 0, 0],
            days: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
            date: [26, 27, 28, 29, 30, 31],
            offerToNumber: {
              offer1: 7,
              offer2: 8,
              offer3: 10,
              offer4: 20,
            },
          },
        ],
        [
          "Aug21",
          {
            offer1: [
              5, 0, 0, 0, 2, 0, 0, 3, 0, 0, 3, 0, 5, 0, 0, 1, 0, 1, 10, 0, 6, 3,
              0, 0, 0, 0, 0, 0, 3, 0, 0,
            ],
            offer2: [
              30, 17, 7, 3, 0, 6, 0, 0, 0, 6, 0, 0, 0, 0, 15, 0, 0, 0, 2, 0, 4,
              2, 1, 0, 0, 0, 0, 0, 1, 0, 0,
            ],
            offer3: [
              27, 0, 3, 4, 4, 8, 26, 37, 11, 9, 18, 9, 14, 34, 49, 18, 8, 1, 20,
              13, 60, 45, 15, 16, 6, 15, 18, 29, 99, 30, 18,
            ],
            offer4: [
              0, 0, 0, 0, 0, 6, 1, 0, 2, 0, 0, 0, 0, 2, 10, 3, 2, 2, 8, 0, 5, 6,
              1, 6, 0, 6, 0, 8, 10, 0, 7,
            ],
            days: [
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
            ],
            date: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
            ],
            offerToNumber: {
              offer1: 7,
              offer2: 8,
              offer3: 10,
              offer4: 20,
            },
          },
        ],
        [
          "Sep21",
          {
            offer1: [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4, 0, 2, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            offer2: [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0,
              0, 0, 10, 0, 0, 0, 0, 0,
            ],
            offer3: [
              7, 15, 6, 50, 38, 11, 20, 4, 14, 37, 31, 52, 8, 17, 12, 17, 5, 60,
              58, 14, 4, 5, 23, 8, 83, 55, 17, 19, 17, 23,
            ],
            offer4: [
              2, 6, 6, 6, 15, 0, 0, 0, 2, 2, 11, 16, 8, 4, 0, 2, 0, 2, 2, 0, 0,
              12, 1, 0, 13, 8, 0, 1, 6, 0,
            ],
            days: [
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
            ],
            date: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            ],
            offerToNumber: {
              offer1: 7,
              offer2: 8,
              offer3: 10,
              offer4: 20,
              offer5: 30,
            },
          },
        ],
        [
          "Oct21",
          {
            offer1: [
              0, 0, 0, 0, 0, 5, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 6, 0, 0, 0, 0, 0, 0, 0,
            ],
            offer2: [
              0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 4, 0, 0, 0, 5, 14, 0, 0,
            ],
            offer3: [
              8, 68, 97, 5, 27, 21, 19, 20, 26, 65, 17, 15, 9, 20, 65, 24, 62,
              14, 19, 8, 9, 27, 35, 35, 7, 23, 19, 33, 25, 66, 35,
            ],
            offer4: [
              0, 11, 0, 0, 0, 4, 0, 6, 9, 7, 0, 0, 4, 4, 5, 15, 18, 2, 3, 2, 0,
              0, 7, 7, 2, 0, 3, 4, 2, 8, 4,
            ],
            days: [
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
            ],
            date: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
            ],
            offerToNumber: {
              offer1: 7,
              offer2: 8,
              offer3: 10,
              offer4: 20,
            },
          },
        ],
        [
          "Nov21",
          {
            offer1: [
              0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 4, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            offer2: [
              0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 16, 0, 0, 0, 0,
            ],
            offer3: [
              27, 28, 23, 7, 46, 46, 60, 47, 15, 19, 47, 15, 55, 79, 13, 11, 33,
              13, 11, 61, 54, 13, 27, 27, 4, 14, 20, 50, 14, 7,
            ],
            offer4: [
              0, 2, 0, 0, 6, 14, 11, 0, 0, 0, 2, 2, 2, 21, 0, 3, 4, 7, 5, 12,
              10, 0, 0, 1, 0, 1, 4, 11, 7, 0,
            ],
            days: [
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
            ],
            date: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            ],
            offerToNumber: {
              offer1: 7,
              offer2: 8,
              offer3: 10,
              offer4: 20,
              offer5: 30,
            },
          },
        ],
        [
          "Dec21",
          {
            offer1: [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
            offer2: [
              0, 0, 6, 0, 0, 0, 13, 0, 0, 0, 3, 2, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0,
              16, 0, 0, 0, 0, 0, 2, 0, 0,
            ],
            offer3: [
              8, 14, 8, 29, 49, 25, 16, 2, 14, 10, 41, 71, 27, 14, 26, 31, 49,
              51, 69, 16, 33, 7, 50, 35, 85, 97, 30, 40, 49, 49, 63,
            ],
            offer4: [
              0, 0, 0, 2, 7, 0, 2, 0, 0, 2, 6, 13, 2, 1, 2, 0, 6, 13, 20, 0, 4,
              4, 12, 0, 12, 8, 9, 3, 1, 13, 9,
            ],
            days: [
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
            ],
            date: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
            ],
            offerToNumber: {
              offer1: 7,
              offer2: 8,
              offer3: 10,
              offer4: 20,
              offer5: 30,
            },
          },
        ],
        [
          "Jan22",
          {
            offer1: [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 4, 0, 15, 0, 8, 0, 0, 4,
            ],
            offer2: [
              0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 8, 20, 0,
            ],
            offer3: [
              99, 104, 27, 17, 32, 22, 7, 69, 58, 16, 22, 16, 15, 16, 23, 41, 9,
              2, 30, 3, 20, 15, 43, 18, 9, 60, 22, 20, 32, 105, 0,
            ],
            offer4: [
              10, 22, 0, 10, 0, 9, 2, 10, 15, 0, 1, 8, 0, 0, 0, 2, 0, 0, 0, 2,
              5, 0, 18, 0, 2, 14, 0, 4, 13, 15, 1,
            ],
            days: [
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
            ],
            date: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
            ],
            offerToNumber: {
              offer1: 7,
              offer2: 8,
              offer3: 10,
              offer4: 20,
              offer5: 30,
            },
          },
        ],
        [
          "Feb22",
          {
            offer1: [
              15, 0, 3, 9, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 7, 0, 9, 18, 4, 4, 8,
              10, 0, 6, 0, 0, 0, 8,
            ],
            offer2: [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 12, 0, 0, 41, 0, 0, 15, 0,
              0, 0, 0, 0, 0, 0, 0,
            ],
            offer3: [
              17, 25, 23, 20, 33, 60, 16, 15, 15, 7, 22, 49, 60, 17, 13, 36, 27,
              33, 68, 90, 23, 28, 29, 11, 10, 42, 69, 11,
            ],
            offer4: [
              0, 1, 5, 1, 15, 13, 0, 0, 2, 3, 3, 9, 3, 0, 3, 3, 4, 2, 4, 3, 1,
              3, 10, 5, 4, 13, 18, 8,
            ],
            days: [
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
            ],
            date: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28,
            ],
            offerToNumber: {
              offer1: 7,
              offer2: 8,
              offer3: 10,
              offer4: 20,
              offer5: 30,
            },
          },
        ],
      ],
    },
  ],
];

/*
 Important conditions
1.  months in expenses and footfall should be in the same order to calculate avgcost
2.  if you add any other field in expenses like tyres  etc. then also add it in showDataPerLaps like i have added.
     tyres:true means, it will show  tyres/laps also,if you don't want to see tyres/laps data, then set it false,it is mandatory to set one value between these two.
3.  name of every offer in each month should be a digit, which represents its number of laps except complementary(i have given 3 laps to it)
 */
export default function addAvgCostToStore(data) {
  // console.log(data);
  data.footfall.forEach((monthData) => {
    monthData[1]["date"] = monthData[1]["date"].map(
      (date, index) => date + monthData[1]["days"][index].slice(0, 2)
    );
  });
  function calculateLapsAndFootallForEachMonth() {
    let arr = [];
    data.footfall.forEach((monthData) => {
      let footfall = 0;
      let laps = 0;
      for (let offer in monthData[1]) {
        if (offer != "date" && offer != "offerToNumber" && offer != "days") {
          let eachfootfall = 0;
          eachfootfall = monthData[1][offer].reduce((a, b) => a + b, 0);
          laps += eachfootfall * monthData[1]["offerToNumber"][offer];
          footfall += eachfootfall;
        }
      }
      // console.log(monthData[0], laps);
      arr.push({ footfall: footfall, laps: laps });
    });

    return arr;
  }
  let arr = calculateLapsAndFootallForEachMonth(data);
  // console.log(arr);
  function addAvgCost(arr) {
    let avgcost = { months: [...data.expenses.months] };
    // add each field/footfall to avgcost
    for (let field in data.expenses) {
      if (field !== "months") {
        let newfiled = [];
        let i = 0;
        data.expenses[field].forEach((ele) => {
          newfiled.push(
            Number(
              (ele / arr[i].footfall == 0 ? 1 : arr[i].footfall).toFixed(2)
            )
          );
          i++;
        });
        avgcost[field] = newfiled;
      }
    }
    // add each field/laps to avgcost
    for (let field in data.expenses) {
      if (field !== "months" && data.showDataPerLaps[field]) {
        let newfiled = [];
        let i = 0;
        data.expenses[field].forEach((ele) => {
          newfiled.push(
            Number((ele / arr[i].laps == 0 ? 1 : arr[i].laps).toFixed(2))
          );
          i++;
        });
        // console.log(newfiled);
        avgcost[field + "_laps"] = newfiled;
      }
    }

    data["avgcost"] = avgcost;
  }
  addAvgCost(arr);
}
