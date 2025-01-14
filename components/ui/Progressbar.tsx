
type SkillType = {
    skillName: string;
  };
  
  export function ProgressBar({ skillName }: SkillType) {
    return (
      <div className="w-1/2 my-4">
        <h3 className="text-lg font-semibold">{skillName}</h3>
      </div>
    );
  }
  