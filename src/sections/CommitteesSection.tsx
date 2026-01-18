import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
import { Users, BookOpen } from "lucide-react";

const committees = {
  topLeadership: {
    universityPresident: {
      name: "Dr. Hadidi Mohamed",
      role: "Acting rector of Tipaza University",
      photo: "images/haddidi.png",
    },
    generalPresident: {
      name: "Dr. Achour Abderraouf",
      role: "Chairman of NCIMGCEB-AI'26",
      photo: "images/achour.jpg",
    },
  },

  organizing: {
    chairs: [
      {
        name: "Dr. Abdelhadi Sofiane",
        role: "Organizing Committee Chair",
        photo: "images/abdelhadi.png",
      },
    ],
    members: [
      { name: "Dr. Hamiouda Sara", affiliation: "Univ Tipaza" },
      { name: "Mr. Djaafer Lakhdar", affiliation: "Univ Tipaza" },
      { name: "Mr. Gheffari Abdelfattah", affiliation: "Univ Tipaza" },
      { name: "Dr. Louadj Amel", affiliation: "Univ Tipaza" },
      { name: "Dr. Bourahla Nassima", affiliation: "Univ Tipaza" },
      { name: "Mme. Bouzit Fatima", affiliation: "Univ Tipaza" },
      { name: "Mme. Mehareb Soulef", affiliation: "Univ Tipaza" },
      { name: "Dr. Houari Hocine", affiliation: "Univ Tipaza" },
      { name: "Dr. Aissou Abdallah", affiliation: "Univ Tipaza" },
      { name: "Dr. Bouraghda Skander", affiliation: "Univ Tipaza" },
      { name: "Dr. Goudjil Hadjer", affiliation: "Univ Tipaza" },
      { name: "Dr. Berghout Oussama", affiliation: "Univ Tipaza" },
      { name: "Dr. Mokadem Maamar", affiliation: "Univ Tipaza" },
      { name: "Dr. Megdoud Yousra", affiliation: "Univ Tipaza" },
      { name: "Dr. Denine Sidali", affiliation: "Univ Tipaza" },
      { name: "Mr. Boufrina Tawfiq", affiliation: "Univ Tipaza" },
      { name: "Dr. Barour Sabiha", affiliation: "Univ Tipaza" },
      { name: "Mme. Bensoudane Sarra", affiliation: "Univ Tipaza" },
      { name: "Mme. Azzaz Ibtissam", affiliation: "Univ Tipaza" },
      { name: "Mme. Benammour Abir", affiliation: "Univ Tipaza" },
      { name: "Dr. Sara Kherroubi", affiliation: "Univ Tipaza" },
      { name: "Mme. Maroua Nihel Benabdallah", affiliation: "Univ Tlemcen" },
      { name: "Dr. Meghzili Seif Allah", affiliation: "Univ Tipaza" },
      { name: "Dr. Khaine Djilali", affiliation: "Univ Tipaza" },
    ],
  },

  scientific: {
    president: {
      name: "Dr. Hamiouda Sara",
      role: "Chairwoman of Scientific Committee",
      photo: "images/hamiouda.png",
    },
    members: [
      { name: "Dr. Yousfi Mohamed Lamine", affiliation: "Univ Tipaza" },
      { name: "Pr. Daghbouche Yasmina", affiliation: "Univ Tipaza" },
      { name: "Dr. Abdelhadi Sofiane", affiliation: "Univ Tipaza" },
      { name: "Pr. Abdelmalk Samir", affiliation: "NSN Nano Sidi Abdellah" },
      { name: "Pr. Laidi Maammer", affiliation: "Univ Medea" },
      { name: "Dr. Ould Khaoua Younes", affiliation: "USTHB" },
      { name: "Dr. Louadj Amel", affiliation: "Univ Tipaza" },
      { name: "Dr. Soumaya Kersenna", affiliation: "Univ Annaba" },
      { name: "Dr. Ezzeroug Kaouther", affiliation: "Univ Tipaza" },
      { name: "Dr. Bradji Okba", affiliation: "NSN Nano Sidi Abdellah" },
      { name: "Pr. Si Moussa Cherif", affiliation: "Univ Medea" },
      { name: "Dr. Bensalem Ahmed", affiliation: "Univ Tipaza" },
      { name: "Pr. Kerchiche Yacine", affiliation: "ENP El Harrach" },
      { name: "Dr. Aziez Mohamed Nadjib", affiliation: "Univ Ghardaia" },
      { name: "Dr. Farial Krache", affiliation: "Univ Tipaza" },
      { name: "Dr. Bouarroudj Mohamed", affiliation: "Univ Tipaza" },
      { name: "Dr. Yasmina Biskri", affiliation: "ENSETech Skikda" },
      { name: "Dr. Laour Mohamed", affiliation: "Univ Tipaza" },
      { name: "Dr. Kerzabi Rachida", affiliation: "CRAPAST Djelfa" },
      { name: "Dr. Bendoumia Meriem", affiliation: "Univ Tipaza" },
      { name: "Dr. Sarra Hout", affiliation: "UDES Tipaza" },
      { name: "Dr. Gherrak Fouzia", affiliation: "Univ Tipaza" },
      { name: "Dr. Khalef Rostom", affiliation: "Univ Mila" },
      { name: "Dr. Mansouri Deloula", affiliation: "Univ Tipaza" },
      { name: "Dr. Mazidi Ahmed", affiliation: "UDES Tipaza" },
      { name: "Dr. Imene Mihoub", affiliation: "Univ Tipaza" },
      { name: "Dr. Ali Tetbirt", affiliation: "UDES / EPST CDER" },
      { name: "Dr. Houari Mohamed", affiliation: "Univ Tipaza" },
      { name: "Dr. Hentabli Mohamed", affiliation: "Univ Chlef" },
      { name: "Dr. Irki Ilyes", affiliation: "Univ Tipaza" },
      { name: "Pr. Rebouh Samia", affiliation: "Univ Medea" },
      { name: "Dr. Belalia Fatiha", affiliation: "Univ Tipaza" },
      { name: "Pr. Lefnaoui Sonia", affiliation: "Univ Medea" },
      { name: "Dr. Raoui Mohamed", affiliation: "Univ Tipaza" },
      { name: "Dr. Adda Asma", affiliation: "Univ Tipaza" },
      { name: "Dr. Ouided Dehas", affiliation: "ENSETech Skikda" },
      { name: "Dr. Younsi Aziz", affiliation: "Univ Tipaza" },
      { name: "Dr. Djelloul Belkacemi", affiliation: "UDES-CDER" },
      { name: "Dr. Oudane Boualem", affiliation: "Univ Tipaza" },
      { name: "Dr. Oussama Benaimeche", affiliation: "Univ Tipaza" },
      { name: "Dr. Ziane Sami", affiliation: "Univ Mila" },
      { name: "Dr. Boussouf Lila", affiliation: "Univ Tipaza" },
      { name: "Dr. Chabni Faycel", affiliation: "Univ Tipaza" },
      { name: "Dr. Kasmi Houria", affiliation: "CRAPAST Djelfa" },
      { name: "Dr. Ikhlef Ahlem", affiliation: "Univ Tipaza" },
      { name: "Dr. Aoudjit Lamine", affiliation: "UDES Tipaza" },
      { name: "Dr. Khemmari Fariza", affiliation: "Univ Tipaza" },
      { name: "Dr. Ziouani Khawla", affiliation: "CRAPAST Djelfa" },
      { name: "Dr. Badis Dalila", affiliation: "Univ Tipaza" },
      { name: "Dr. Kheloufi Nawal", affiliation: "Univ Tipaza" },
      { name: "Dr. Abdeslam Nora Amele", affiliation: "Univ Biskra" },
      { name: "Dr. Mouada Hanane", affiliation: "Univ Tipaza" },
      { name: "Dr. Zoubir Belgroun", affiliation: "UDES / EPST CDER" },
      { name: "Dr. Tigrine Zahia", affiliation: "UDES-CDER" },
      { name: "Dr. Sadoun Louiza", affiliation: "Univ Tipaza" },
      { name: "Dr. Aissou Abdallah", affiliation: "Univ Tipaza" },
    ],
  },
};

export const CommitteesSection = () => {
  return (
    <SectionWrapper id="committees" background="muted">
      <SectionTitle
        title="Committees"
        subtitle="Meet the distinguished members organizing NCIMGCEB-AI'26"
      />

      <div className="space-y-12">

        {/* University President */}
        <div className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-cyan/10 border">
          <div className="flex items-center gap-4">
            <img
              loading="lazy"
              src={`${import.meta.env.BASE_URL}${committees.topLeadership.universityPresident.photo}`}
              alt={committees.topLeadership.universityPresident.name}
              className="w-24 h-24 rounded-full object-cover border"
            />
            <div>
              <h4 className="text-lg font-semibold">
                {committees.topLeadership.universityPresident.name}
              </h4>
              <p className="text-primary font-medium">
                {committees.topLeadership.universityPresident.role}
              </p>
            </div>
          </div>
        </div>

        {/* General President */}
        <div className="p-5 rounded-xl bg-gradient-to-br from-cyan/10 to-violet/10 border">
          <div className="flex items-center gap-4">
            <img
              loading="lazy"
              src={`${import.meta.env.BASE_URL}${committees.topLeadership.generalPresident.photo}`}
              alt={committees.topLeadership.generalPresident.name}
              className="w-24 h-24 rounded-full object-cover border"
            />
            <div>
              <h4 className="text-lg font-semibold">
                {committees.topLeadership.generalPresident.name}
              </h4>
              <p className="text-cyan font-medium">
                {committees.topLeadership.generalPresident.role}
              </p>
            </div>
          </div>
        </div>

        {/* Scientific Committee */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6" />
            <h3 className="text-2xl font-semibold">Scientific Committee</h3>
          </div>

          <div className="p-5 mb-6 rounded-xl bg-gradient-to-br from-cyan/10 to-violet/10 border">
            <div className="flex items-center gap-4">
              <img
                loading="lazy"
                src={`${import.meta.env.BASE_URL}${committees.scientific.president.photo}`}
                alt={committees.scientific.president.name}
                className="w-24 h-24 rounded-full object-cover border"
              />
              <div>
                <h4 className="text-lg font-semibold">
                  {committees.scientific.president.name}
                </h4>
                <p className="text-cyan font-medium">
                  {committees.scientific.president.role}
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {committees.scientific.members.map((member) => (
              <div
                key={`${member.name}-${member.affiliation}`}
                className="p-3 rounded-lg bg-secondary/20 border"
              >
                <p className="text-sm font-medium">{member.name}</p>
                <p className="text-xs opacity-70">{member.affiliation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Organizing Committee */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6" />
            <h3 className="text-2xl font-semibold">Organizing Committee</h3>
          </div>

          {committees.organizing.chairs.map((chair) => (
            <div
              key={chair.name}
              className="p-5 mb-6 rounded-xl bg-gradient-to-br from-cyan/10 to-violet/10 border flex items-center gap-4"
            >
              <img
                loading="lazy"
                src={`${import.meta.env.BASE_URL}${chair.photo}`}
                alt={chair.name}
                className="w-24 h-24 rounded-full object-cover border"
              />
              <div>
                <h4 className="text-lg font-semibold">{chair.name}</h4>
                <p className="text-cyan font-medium">{chair.role}</p>
              </div>
            </div>
          ))}

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {committees.organizing.members.map((member) => (
              <div
                key={`${member.name}-${member.affiliation}`}
                className="p-3 rounded-lg bg-secondary/20 border"
              >
                <p className="text-sm font-medium">{member.name}</p>
                <p className="text-xs opacity-70">{member.affiliation}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
