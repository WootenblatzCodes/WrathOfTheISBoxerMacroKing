class Buffs {
    isMatch(spellName) {
        let result = false;
        this.getSpells().forEach(function (spell) {
            if (result == false && spell.name.includes(spellName)) {
                result = true;
            }
        });
        return result;
    }

    getSpells() {
        return [
            {
                "id": 1243,
                "name": "@Power Word: Fortitude",
                "icon": "spell_holy_wordfortitude",
                "level": 1,
                "school": 2,
                "cat": 7,
                "trainingcost": 10,
                "skill": [613],
                "reagents": [],
                "source": [6],
                "rank": "Rank 1",
                "reqclass": 16
            }, {
                "id": 1244,
                "name": "@Power Word: Fortitude",
                "icon": "spell_holy_wordfortitude",
                "level": 12,
                "school": 2,
                "cat": 7,
                "trainingcost": 800,
                "skill": [613],
                "reagents": [],
                "source": [6],
                "rank": "Rank 2",
                "reqclass": 16
            }, {
                "id": 1245,
                "name": "@Power Word: Fortitude",
                "icon": "spell_holy_wordfortitude",
                "level": 24,
                "school": 2,
                "cat": 7,
                "trainingcost": 5000,
                "skill": [613],
                "reagents": [],
                "source": [6],
                "rank": "Rank 3",
                "reqclass": 16
            }, {
                "id": 1459,
                "name": "@Arcane Intellect",
                "icon": "spell_holy_magicalsentry",
                "level": 1,
                "school": 64,
                "cat": 7,
                "trainingcost": 10,
                "skill": [237],
                "reagents": [],
                "source": [6],
                "rank": "Rank 1",
                "reqclass": 128
            }, {
                "id": 1460,
                "name": "@Arcane Intellect",
                "icon": "spell_holy_magicalsentry",
                "level": 14,
                "school": 64,
                "cat": 7,
                "trainingcost": 900,
                "skill": [237],
                "reagents": [],
                "source": [6],
                "rank": "Rank 2",
                "reqclass": 128
            }, {
                "id": 1461,
                "name": "@Arcane Intellect",
                "icon": "spell_holy_magicalsentry",
                "level": 28,
                "school": 64,
                "cat": 7,
                "trainingcost": 7000,
                "skill": [237],
                "reagents": [],
                "source": [6],
                "rank": "Rank 3",
                "reqclass": 128
            }, {
                "id": 2791,
                "name": "@Power Word: Fortitude",
                "icon": "spell_holy_wordfortitude",
                "level": 36,
                "school": 2,
                "cat": 7,
                "trainingcost": 14000,
                "skill": [613],
                "reagents": [],
                "source": [6],
                "rank": "Rank 4",
                "reqclass": 16
            }, {
                "id": 5232,
                "name": "@Mark of the Wild",
                "icon": "spell_nature_regeneration",
                "level": 10,
                "school": 8,
                "cat": 7,
                "trainingcost": 300,
                "skill": [573],
                "reagents": [],
                "source": [6],
                "rank": "Rank 2",
                "reqclass": 1024
            }, {
                "id": 5234,
                "name": "@Mark of the Wild",
                "icon": "spell_nature_regeneration",
                "level": 30,
                "school": 8,
                "cat": 7,
                "trainingcost": 6000,
                "skill": [573],
                "reagents": [],
                "source": [6],
                "rank": "Rank 4",
                "reqclass": 1024
            }, {
                "id": 6756,
                "name": "@Mark of the Wild",
                "icon": "spell_nature_regeneration",
                "level": 20,
                "school": 8,
                "cat": 7,
                "trainingcost": 2000,
                "skill": [573],
                "reagents": [],
                "source": [6],
                "rank": "Rank 3",
                "reqclass": 1024
            }, {
                "id": 8907,
                "name": "@Mark of the Wild",
                "icon": "spell_nature_regeneration",
                "level": 40,
                "school": 8,
                "cat": 7,
                "trainingcost": 14000,
                "skill": [573],
                "reagents": [],
                "source": [6],
                "rank": "Rank 5",
                "reqclass": 1024
            }, {
                "id": 9884,
                "name": "@Mark of the Wild",
                "icon": "spell_nature_regeneration",
                "level": 50,
                "school": 8,
                "cat": 7,
                "trainingcost": 23000,
                "skill": [573],
                "reagents": [],
                "source": [6],
                "rank": "Rank 6",
                "reqclass": 1024
            }, {
                "id": 9885,
                "name": "@Mark of the Wild",
                "icon": "spell_nature_regeneration",
                "level": 60,
                "school": 8,
                "cat": 7,
                "trainingcost": 34000,
                "skill": [573],
                "reagents": [],
                "source": [6],
                "rank": "Rank 7",
                "reqclass": 1024
            }, {
                "id": 10156,
                "name": "@Arcane Intellect",
                "icon": "spell_holy_magicalsentry",
                "level": 42,
                "school": 64,
                "cat": 7,
                "trainingcost": 18000,
                "skill": [237],
                "reagents": [],
                "source": [6],
                "rank": "Rank 4",
                "reqclass": 128
            }, {
                "id": 10157,
                "name": "@Arcane Intellect",
                "icon": "spell_holy_magicalsentry",
                "level": 56,
                "school": 64,
                "cat": 7,
                "trainingcost": 38000,
                "skill": [237],
                "reagents": [],
                "source": [6],
                "rank": "Rank 5",
                "reqclass": 128
            }, {
                "id": 10937,
                "name": "@Power Word: Fortitude",
                "icon": "spell_holy_wordfortitude",
                "level": 48,
                "school": 2,
                "cat": 7,
                "trainingcost": 28000,
                "skill": [613],
                "reagents": [],
                "source": [6],
                "rank": "Rank 5",
                "reqclass": 16
            }, {
                "id": 10938,
                "name": "@Power Word: Fortitude",
                "icon": "spell_holy_wordfortitude",
                "level": 60,
                "school": 2,
                "cat": 7,
                "trainingcost": 46000,
                "skill": [613],
                "reagents": [],
                "source": [6],
                "rank": "Rank 6",
                "reqclass": 16
            }, {
                "id": 14752,
                "name": "@Divine Spirit",
                "icon": "spell_holy_divinespirit",
                "level": 30,
                "school": 2,
                "cat": 7,
                "trainingcost": 600,
                "skill": [613],
                "reagents": [],
                "source": [6],
                "rank": "Rank 1",
                "reqclass": 16
            }, {
                "id": 14818,
                "name": "@Divine Spirit",
                "icon": "spell_holy_divinespirit",
                "level": 40,
                "school": 2,
                "cat": 7,
                "trainingcost": 900,
                "skill": [613],
                "reagents": [],
                "source": [6],
                "rank": "Rank 2",
                "reqclass": 16
            }, {
                "id": 14819,
                "name": "@Divine Spirit",
                "icon": "spell_holy_divinespirit",
                "level": 50,
                "school": 2,
                "cat": 7,
                "trainingcost": 1500,
                "skill": [613],
                "reagents": [],
                "source": [6],
                "rank": "Rank 3",
                "reqclass": 16
            }, {
                "id": 21562,
                "name": "@Prayer of Fortitude",
                "icon": "spell_holy_prayeroffortitude",
                "level": 48,
                "school": 2,
                "cat": 7,
                "trainingcost": 28000,
                "skill": [613],
                "reagents": [[17028, 1]],
                "source": [2, 6],
                "rank": "Rank 1",
                "reqclass": 16
            }, {
                "id": 21564,
                "name": "@Prayer of Fortitude",
                "icon": "spell_holy_prayeroffortitude",
                "level": 60,
                "school": 2,
                "cat": 7,
                "trainingcost": 46000,
                "skill": [613],
                "reagents": [[17029, 1]],
                "source": [2, 6],
                "rank": "Rank 2",
                "reqclass": 16
            }, {
                "id": 21849,
                "name": "@Gift of the Wild",
                "icon": "spell_nature_giftofthewild",
                "level": 50,
                "school": 8,
                "cat": 7,
                "trainingcost": 23000,
                "skill": [573],
                "reagents": [[17021, 1]],
                "source": [2, 6],
                "rank": "Rank 1",
                "reqclass": 1024
            }, {
                "id": 21850,
                "name": "@Gift of the Wild",
                "icon": "spell_nature_giftofthewild",
                "level": 60,
                "school": 8,
                "cat": 7,
                "trainingcost": 34000,
                "skill": [573],
                "reagents": [[17026, 1]],
                "source": [2, 6],
                "rank": "Rank 2",
                "reqclass": 1024
            }, {
                "id": 23028,
                "name": "@Arcane Brilliance",
                "icon": "spell_holy_arcaneintellect",
                "level": 56,
                "school": 64,
                "cat": 7,
                "trainingcost": 38000,
                "skill": [237],
                "reagents": [[17020, 1]],
                "source": [2, 6],
                "rank": "Rank 1",
                "reqclass": 128
            }, {
                "id": 25312,
                "name": "@Divine Spirit",
                "icon": "spell_holy_divinespirit",
                "level": 70,
                "school": 2,
                "cat": 7,
                "trainingcost": 2300,
                "skill": [613],
                "reagents": [],
                "source": [6],
                "rank": "Rank 5",
                "reqclass": 16
            }, {
                "id": 25389,
                "name": "@Power Word: Fortitude",
                "icon": "spell_holy_wordfortitude",
                "level": 70,
                "school": 2,
                "cat": 7,
                "trainingcost": 65000,
                "skill": [613],
                "reagents": [],
                "source": [6],
                "rank": "Rank 7",
                "reqclass": 16
            }, {
                "id": 25392,
                "name": "@Prayer of Fortitude",
                "icon": "spell_holy_prayeroffortitude",
                "level": 70,
                "school": 2,
                "cat": 7,
                "trainingcost": 100000,
                "skill": [613],
                "reagents": [[17029, 1]],
                "source": [2, 6],
                "rank": "Rank 3",
                "reqclass": 16
            }, {
                "id": 26990,
                "name": "@Mark of the Wild",
                "icon": "spell_nature_regeneration",
                "level": 70,
                "school": 8,
                "cat": 7,
                "trainingcost": 100000,
                "skill": [573],
                "reagents": [],
                "source": [6],
                "rank": "Rank 8",
                "reqclass": 1024
            }, {
                "id": 26991,
                "name": "@Gift of the Wild",
                "icon": "spell_nature_giftofthewild",
                "level": 70,
                "school": 8,
                "cat": 7,
                "trainingcost": 100000,
                "skill": [573],
                "reagents": [[22148, 1]],
                "source": [2, 6],
                "rank": "Rank 3",
                "reqclass": 1024
            }, {
                "id": 27126,
                "name": "@Arcane Intellect",
                "icon": "spell_holy_magicalsentry",
                "level": 70,
                "school": 64,
                "cat": 7,
                "trainingcost": 120000,
                "skill": [237],
                "reagents": [],
                "source": [6],
                "rank": "Rank 6",
                "reqclass": 128
            }, {
                "id": 27127,
                "name": "@Arcane Brilliance",
                "icon": "spell_holy_arcaneintellect",
                "level": 70,
                "school": 64,
                "cat": 7,
                "trainingcost": 100000,
                "skill": [237],
                "reagents": [[17020, 1]],
                "source": [2, 6],
                "rank": "Rank 2",
                "reqclass": 128
            }, {
                "id": 27681,
                "name": "@Prayer of Spirit",
                "icon": "spell_holy_prayerofspirit",
                "level": 60,
                "school": 2,
                "cat": 7,
                "trainingcost": 2300,
                "skill": [613],
                "reagents": [[17029, 1]],
                "source": [6],
                "rank": "Rank 1",
                "reqclass": 16
            }, {
                "id": 27841,
                "name": "@Divine Spirit",
                "icon": "spell_holy_divinespirit",
                "level": 60,
                "school": 2,
                "cat": 7,
                "trainingcost": 2300,
                "skill": [613],
                "reagents": [],
                "source": [6],
                "rank": "Rank 4",
                "reqclass": 16
            }, {
                "id": 32999,
                "name": "@Prayer of Spirit",
                "icon": "spell_holy_prayerofspirit",
                "level": 70,
                "school": 2,
                "cat": 7,
                "trainingcost": 3400,
                "skill": [613],
                "reagents": [[17029, 1]],
                "source": [6],
                "rank": "Rank 2",
                "reqclass": 16
            }, {
                "id": 42995,
                "name": "@Arcane Intellect",
                "icon": "spell_holy_magicalsentry",
                "level": 80,
                "school": 64,
                "cat": 7,
                "trainingcost": 150000,
                "skill": [237],
                "reagents": [],
                "source": [6],
                "rank": "Rank 7",
                "reqclass": 128
            }, {
                "id": 43002,
                "name": "@Arcane Brilliance",
                "icon": "spell_holy_arcaneintellect",
                "level": 80,
                "school": 64,
                "cat": 7,
                "trainingcost": 150000,
                "skill": [237],
                "reagents": [[17020, 1]],
                "source": [6],
                "rank": "Rank 3",
                "reqclass": 128
            }, {
                "id": 48073,
                "name": "@Divine Spirit",
                "icon": "spell_holy_divinespirit",
                "level": 80,
                "school": 2,
                "cat": 7,
                "trainingcost": 9000,
                "skill": [613],
                "reagents": [],
                "source": [6],
                "rank": "Rank 6",
                "reqclass": 16
            }, {
                "id": 48074,
                "name": "@Prayer of Spirit",
                "icon": "spell_holy_prayerofspirit",
                "level": 80,
                "school": 2,
                "cat": 7,
                "trainingcost": 9000,
                "skill": [613],
                "reagents": [[44615, 1]],
                "source": [6],
                "rank": "Rank 3",
                "reqclass": 16
            }, {
                "id": 48161,
                "name": "@Power Word: Fortitude",
                "icon": "spell_holy_wordfortitude",
                "level": 80,
                "school": 2,
                "cat": 7,
                "trainingcost": 180000,
                "skill": [613],
                "reagents": [],
                "source": [6],
                "rank": "Rank 8",
                "reqclass": 16
            }, {
                "id": 48162,
                "name": "@Prayer of Fortitude",
                "icon": "spell_holy_prayeroffortitude",
                "level": 80,
                "school": 2,
                "cat": 7,
                "trainingcost": 180000,
                "skill": [613],
                "reagents": [[44615, 1]],
                "source": [6],
                "rank": "Rank 4",
                "reqclass": 16
            }, {
                "id": 48469,
                "name": "@Mark of the Wild",
                "icon": "spell_nature_regeneration",
                "level": 80,
                "school": 8,
                "cat": 7,
                "trainingcost": 200000,
                "skill": [573],
                "reagents": [],
                "source": [6],
                "rank": "Rank 9",
                "reqclass": 1024
            }, {
                "id": 48470,
                "name": "@Gift of the Wild",
                "icon": "spell_nature_giftofthewild",
                "level": 80,
                "school": 8,
                "cat": 7,
                "trainingcost": 200000,
                "skill": [573],
                "reagents": [[44605, 1]],
                "source": [6],
                "rank": "Rank 4",
                "reqclass": 1024
            }, {
                "id": 61024,
                "name": "@Dalaran Intellect",
                "icon": "achievement_dungeon_theviolethold",
                "level": 80,
                "school": 64,
                "cat": 7,
                "trainingcost": 0,
                "skill": [237],
                "reagents": [],
                "source": [5],
                "rank": "Rank 7",
                "reqclass": 128
            }, {
                "id": 61316,
                "name": "@Dalaran Brilliance",
                "icon": "achievement_dungeon_theviolethold_heroic",
                "level": 80,
                "school": 64,
                "cat": 7,
                "trainingcost": 0,
                "skill": [237],
                "reagents": [[17020, 1]],
                "source": [5],
                "rank": "Rank 3",
                "reqclass": 128
            },
            {
                "id": 467,
                "name": "@Thorns",
                "icon": "spell_nature_thorns",
                "level": 6,
                "school": 8,
                "cat": 7,
                "trainingcost": 100,
                "skill": [574],
                "reagents": [],
                "source": [6],
                "rank": "Rank 1",
                "reqclass": 1024
            },
            {
                "id": 546,
                "name": "@Water Walking",
                "icon": "spell_frost_windwalkon",
                "level": 28,
                "school": 8,
                "cat": 7,
                "trainingcost": 6000,
                "skill": [373],
                "reagents": [[17058, 1]],
                "source": [6],
                "reqclass": 64
            }, {
                "id": 1706,
                "name": "@Levitate",
                "icon": "spell_holy_layonhands",
                "level": 34,
                "school": 2,
                "cat": 7,
                "trainingcost": 12000,
                "skill": [613],
                "reagents": [[17056, 1]],
                "source": [6],
                "reqclass": 16
            },
            {
                "id": 20911,
                "name": "@Blessing of Sanctuary",
                "icon": "spell_nature_lightningshield",
                "level": 30,
                "school": 2,
                "cat": -2,
                "trainingcost": 0,
                "skill": [267],
                "reagents": [],
                "source": [9],
                "reqclass": 2
            }, {
                "id": 19740,
                "name": "@Blessing of Might",
                "icon": "spell_holy_fistofjustice",
                "level": 4,
                "school": 2,
                "cat": 7,
                "trainingcost": 100,
                "skill": [184],
                "reagents": [],
                "source": [6],
                "rank": "Rank 1",
                "reqclass": 2
            }, {
                "id": 19742,
                "name": "@Blessing of Wisdom",
                "icon": "spell_holy_sealofwisdom",
                "level": 14,
                "school": 2,
                "cat": 7,
                "trainingcost": 2000,
                "skill": [594],
                "reagents": [],
                "source": [6],
                "rank": "Rank 1",
                "reqclass": 2
            }, {
                "id": 19834,
                "name": "@Blessing of Might",
                "icon": "spell_holy_fistofjustice",
                "level": 12,
                "school": 2,
                "cat": 7,
                "trainingcost": 1000,
                "skill": [184],
                "reagents": [],
                "source": [6],
                "rank": "Rank 2",
                "reqclass": 2
            }, {
                "id": 19835,
                "name": "@Blessing of Might",
                "icon": "spell_holy_fistofjustice",
                "level": 22,
                "school": 2,
                "cat": 7,
                "trainingcost": 4000,
                "skill": [184],
                "reagents": [],
                "source": [6],
                "rank": "Rank 3",
                "reqclass": 2
            }, {
                "id": 19836,
                "name": "@Blessing of Might",
                "icon": "spell_holy_fistofjustice",
                "level": 32,
                "school": 2,
                "cat": 7,
                "trainingcost": 12000,
                "skill": [184],
                "reagents": [],
                "source": [6],
                "rank": "Rank 4",
                "reqclass": 2
            }, {
                "id": 19837,
                "name": "@Blessing of Might",
                "icon": "spell_holy_fistofjustice",
                "level": 42,
                "school": 2,
                "cat": 7,
                "trainingcost": 21000,
                "skill": [184],
                "reagents": [],
                "source": [6],
                "rank": "Rank 5",
                "reqclass": 2
            }, {
                "id": 19838,
                "name": "@Blessing of Might",
                "icon": "spell_holy_fistofjustice",
                "level": 52,
                "school": 2,
                "cat": 7,
                "trainingcost": 34000,
                "skill": [184],
                "reagents": [],
                "source": [6],
                "rank": "Rank 6",
                "reqclass": 2
            }, {
                "id": 19850,
                "name": "@Blessing of Wisdom",
                "icon": "spell_holy_sealofwisdom",
                "level": 24,
                "school": 2,
                "cat": 7,
                "trainingcost": 5000,
                "skill": [594],
                "reagents": [],
                "source": [6],
                "rank": "Rank 2",
                "reqclass": 2
            }, {
                "id": 19852,
                "name": "@Blessing of Wisdom",
                "icon": "spell_holy_sealofwisdom",
                "level": 34,
                "school": 2,
                "cat": 7,
                "trainingcost": 13000,
                "skill": [594],
                "reagents": [],
                "source": [6],
                "rank": "Rank 3",
                "reqclass": 2
            }, {
                "id": 19853,
                "name": "@Blessing of Wisdom",
                "icon": "spell_holy_sealofwisdom",
                "level": 44,
                "school": 2,
                "cat": 7,
                "trainingcost": 22000,
                "skill": [594],
                "reagents": [],
                "source": [6],
                "rank": "Rank 4",
                "reqclass": 2
            }, {
                "id": 19854,
                "name": "@Blessing of Wisdom",
                "icon": "spell_holy_sealofwisdom",
                "level": 54,
                "school": 2,
                "cat": 7,
                "trainingcost": 40000,
                "skill": [594],
                "reagents": [],
                "source": [6],
                "rank": "Rank 5",
                "reqclass": 2
            }, {
                "id": 20217,
                "name": "@Blessing of Kings",
                "icon": "spell_magic_magearmor",
                "level": 20,
                "school": 2,
                "cat": 7,
                "trainingcost": 4000,
                "skill": [267],
                "reagents": [],
                "source": [6],
                "reqclass": 2
            }, {
                "id": 25290,
                "name": "@Blessing of Wisdom",
                "icon": "spell_holy_sealofwisdom",
                "level": 60,
                "school": 2,
                "cat": 7,
                "trainingcost": 50000,
                "skill": [594],
                "reagents": [],
                "source": [2, 6],
                "rank": "Rank 6",
                "reqclass": 2
            }, {
                "id": 25291,
                "name": "@Blessing of Might",
                "icon": "spell_holy_fistofjustice",
                "level": 60,
                "school": 2,
                "cat": 7,
                "trainingcost": 50000,
                "skill": [184],
                "reagents": [],
                "source": [2, 6],
                "rank": "Rank 7",
                "reqclass": 2
            }, {
                "id": 25782,
                "name": "@Greater Blessing of Might",
                "icon": "spell_holy_greaterblessingofkings",
                "level": 52,
                "school": 2,
                "cat": 7,
                "trainingcost": 46000,
                "skill": [184],
                "reagents": [[21177, 1]],
                "source": [6],
                "rank": "Rank 1",
                "reqclass": 2
            }, {
                "id": 25894,
                "name": "@Greater Blessing of Wisdom",
                "icon": "spell_holy_greaterblessingofwisdom",
                "level": 54,
                "school": 2,
                "cat": 7,
                "trainingcost": 46000,
                "skill": [594],
                "reagents": [[21177, 1]],
                "source": [6],
                "rank": "Rank 1",
                "reqclass": 2
            }, {
                "id": 25898,
                "name": "@Greater Blessing of Kings",
                "icon": "spell_magic_greaterblessingofkings",
                "level": 60,
                "school": 2,
                "cat": 7,
                "trainingcost": 2300,
                "skill": [267],
                "reagents": [[21177, 1]],
                "source": [6],
                "reqclass": 2
            }, {
                "id": 25899,
                "name": "@Greater Blessing of Sanctuary",
                "icon": "spell_holy_greaterblessingofsanctuary",
                "level": 60,
                "school": 2,
                "cat": 7,
                "trainingcost": 2300,
                "skill": [267],
                "reagents": [[21177, 1]],
                "source": [6],
                "reqclass": 2
            }, {
                "id": 25916,
                "name": "@Greater Blessing of Might",
                "icon": "spell_holy_greaterblessingofkings",
                "level": 60,
                "school": 2,
                "cat": 7,
                "trainingcost": 46000,
                "skill": [184],
                "reagents": [[21177, 1]],
                "source": [6],
                "rank": "Rank 2",
                "reqclass": 2
            }, {
                "id": 25918,
                "name": "@Greater Blessing of Wisdom",
                "icon": "spell_holy_greaterblessingofwisdom",
                "level": 60,
                "school": 2,
                "cat": 7,
                "trainingcost": 46000,
                "skill": [594],
                "reagents": [[21177, 1]],
                "source": [6],
                "rank": "Rank 2",
                "reqclass": 2
            }, {
                "id": 27140,
                "name": "@Blessing of Might",
                "icon": "spell_holy_fistofjustice",
                "level": 70,
                "school": 2,
                "cat": 7,
                "trainingcost": 200000,
                "skill": [184],
                "reagents": [],
                "source": [6],
                "rank": "Rank 8",
                "reqclass": 2
            }, {
                "id": 27141,
                "name": "@Greater Blessing of Might",
                "icon": "spell_holy_greaterblessingofkings",
                "level": 70,
                "school": 2,
                "cat": 7,
                "trainingcost": 100000,
                "skill": [184],
                "reagents": [[21177, 1]],
                "source": [6],
                "rank": "Rank 3",
                "reqclass": 2
            }, {
                "id": 27142,
                "name": "@Blessing of Wisdom",
                "icon": "spell_holy_sealofwisdom",
                "level": 65,
                "school": 2,
                "cat": 7,
                "trainingcost": 75000,
                "skill": [594],
                "reagents": [],
                "source": [6],
                "rank": "Rank 7",
                "reqclass": 2
            }, {
                "id": 27143,
                "name": "@Greater Blessing of Wisdom",
                "icon": "spell_holy_greaterblessingofwisdom",
                "level": 65,
                "school": 2,
                "cat": 7,
                "trainingcost": 75000,
                "skill": [594],
                "reagents": [[21177, 1]],
                "source": [6],
                "rank": "Rank 3",
                "reqclass": 2
            }, {
                "id": 48931,
                "name": "@Blessing of Might",
                "icon": "spell_holy_fistofjustice",
                "level": 73,
                "school": 2,
                "cat": 7,
                "trainingcost": 200000,
                "skill": [184],
                "reagents": [],
                "source": [6],
                "rank": "Rank 9",
                "reqclass": 2
            }, {
                "id": 48932,
                "name": "@Blessing of Might",
                "icon": "spell_holy_fistofjustice",
                "level": 79,
                "school": 2,
                "cat": 7,
                "trainingcost": 200000,
                "skill": [184],
                "reagents": [],
                "source": [6],
                "rank": "Rank 10",
                "reqclass": 2
            }, {
                "id": 48933,
                "name": "@Greater Blessing of Might",
                "icon": "spell_holy_greaterblessingofkings",
                "level": 73,
                "school": 2,
                "cat": 7,
                "trainingcost": 200000,
                "skill": [184],
                "reagents": [[21177, 1]],
                "source": [6],
                "rank": "Rank 4",
                "reqclass": 2
            }, {
                "id": 48934,
                "name": "@Greater Blessing of Might",
                "icon": "spell_holy_greaterblessingofkings",
                "level": 79,
                "school": 2,
                "cat": 7,
                "trainingcost": 200000,
                "skill": [184],
                "reagents": [[21177, 1]],
                "source": [6],
                "rank": "Rank 5",
                "reqclass": 2
            }, {
                "id": 48935,
                "name": "@Blessing of Wisdom",
                "icon": "spell_holy_sealofwisdom",
                "level": 71,
                "school": 2,
                "cat": 7,
                "trainingcost": 200000,
                "skill": [594],
                "reagents": [],
                "source": [6],
                "rank": "Rank 8",
                "reqclass": 2
            }, {
                "id": 48936,
                "name": "@Blessing of Wisdom",
                "icon": "spell_holy_sealofwisdom",
                "level": 77,
                "school": 2,
                "cat": 7,
                "trainingcost": 200000,
                "skill": [594],
                "reagents": [],
                "source": [6],
                "rank": "Rank 9",
                "reqclass": 2
            }, {
                "id": 48937,
                "name": "@Greater Blessing of Wisdom",
                "icon": "spell_holy_greaterblessingofwisdom",
                "level": 71,
                "school": 2,
                "cat": 7,
                "trainingcost": 200000,
                "skill": [594],
                "reagents": [[21177, 1]],
                "source": [6],
                "rank": "Rank 4",
                "reqclass": 2
            }, {
                "id": 48938,
                "name": "@Greater Blessing of Wisdom",
                "icon": "spell_holy_greaterblessingofwisdom",
                "level": 77,
                "school": 2,
                "cat": 7,
                "trainingcost": 200000,
                "skill": [594],
                "reagents": [[21177, 1]],
                "source": [6],
                "rank": "Rank 5",
                "reqclass": 2
            },
            {
                "id": 1022,
                "name": "@Hand of Protection",
                "icon": "spell_holy_sealofprotection",
                "level": 10,
                "school": 2,
                "cat": 7,
                "trainingcost": 300,
                "skill": [267],
                "reagents": [],
                "source": [6],
                "rank": "Rank 1",
                "reqclass": 2
            }, {
                "id": 1038,
                "name": "@Hand of Salvation",
                "icon": "spell_holy_sealofsalvation",
                "level": 26,
                "school": 2,
                "cat": 7,
                "trainingcost": 6000,
                "skill": [267],
                "reagents": [],
                "source": [6],
                "reqclass": 2
            }, {
                "id": 1044,
                "name": "@Hand of Freedom",
                "icon": "spell_holy_sealofvalor",
                "level": 18,
                "school": 2,
                "cat": 7,
                "trainingcost": 3500,
                "skill": [267],
                "reagents": [],
                "source": [6],
                "reqclass": 2
            }, {
                "id": 5599,
                "name": "@Hand of Protection",
                "icon": "spell_holy_sealofprotection",
                "level": 24,
                "school": 2,
                "cat": 7,
                "trainingcost": 5000,
                "skill": [267],
                "reagents": [],
                "source": [6],
                "rank": "Rank 2",
                "reqclass": 2
            }, {
                "id": 6940,
                "name": "@Hand of Sacrifice",
                "icon": "spell_holy_sealofsacrifice",
                "level": 46,
                "school": 2,
                "cat": 7,
                "trainingcost": 24000,
                "skill": [267],
                "reagents": [],
                "source": [6],
                "reqclass": 2
            }, {
                "id": 10278,
                "name": "@Hand of Protection",
                "icon": "spell_holy_sealofprotection",
                "level": 38,
                "school": 2,
                "cat": 7,
                "trainingcost": 16000,
                "skill": [267],
                "reagents": [],
                "source": [6],
                "rank": "Rank 3",
                "reqclass": 2
            },

        ];
    }
}

module.exports = Buffs;
